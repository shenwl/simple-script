import Empty from './Empty.js';
import FARule from '../../common/FARule.js';
import NFADesign from '../../nfa/NFADesign.js';
import NFARuleBook from '../../nfa/NFARuleBook.js';

/**
 * 正则 '|'，在两个模式之间选择
 */
export default class Choose extends Empty {
  precedence = 0;

  constructor(first, second) {
    super();
    this.first = first;
    this.second = second;
  }

  toString = () => [this.first, this.second].map(pattern => pattern.bracket(this.precedence)).join('|');


  /**
   * 在a|b NFA读取任何输入之前，它可以自由移动进入任何一个原始机器的起始状态，再从这个状态开始读取 'a'或者'b'从而达到一个接受状态
   * 增加一个新的起始状态并用自由移动把它与两台原始机器之前的起始状态连接起来
   */
  toNfaDesign = () => {
    const firstNfaDesign = this.first.toNfaDesign();
    const secondNfaDesign = this.second.toNfaDesign();

    const startState = new Object();
    const acceptStates = firstNfaDesign.acceptStates.concat(secondNfaDesign.acceptStates);

    const rules = firstNfaDesign.ruleBook.rules.concat(secondNfaDesign.ruleBook.rules);
    const extraRules = [firstNfaDesign, secondNfaDesign].map(
      nfaDesign => new FARule(startState, null, nfaDesign.startState)
    );

    const ruleBook = new NFARuleBook(rules.concat(extraRules));
    return new NFADesign(startState, acceptStates, ruleBook)
  }
}