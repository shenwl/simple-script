import FARule from '../../common/FARule.js';
import NFADesign from '../../nfa/NFADesign.js';
import NFARuleBook from '../../nfa/NFARuleBook.js';
import Empty from './Empty.js';
/**
 * 连接两个模式
 */
export default class Concatenate extends Empty {
  precedence = 1;

  constructor(first, second) {
    super();
    this.first = first;
    this.second = second;
  }

  toString = () => [this.first, this.second].map(pattern => pattern.bracket(this.precedence)).join('');

  /**
   * 两个NFA的顺序连接
   * 先把第一个NFA的每一个接受状态转为非接受状态，在通过自由移动把它与第二个NFA的开始状态连接
   */
  toNfaDesign = () => {
    const firstNfaDesign = this.first.toNfaDesign();
    const secondNfaDesign = this.second.toNfaDesign();

    const startState = firstNfaDesign.startState;
    const acceptStates = secondNfaDesign.acceptStates;

    const rules = firstNfaDesign.ruleBook.rules.concat(secondNfaDesign.ruleBook.rules);
    const extraRules = firstNfaDesign.acceptStates.map(state => new FARule(state, null, secondNfaDesign.startState));

    const ruleBook = new NFARuleBook(rules.concat(extraRules));
    return new NFADesign(startState, acceptStates, ruleBook)
  }
}