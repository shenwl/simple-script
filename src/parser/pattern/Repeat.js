import FARule from '../../common/FARule.js';
import NFADesign from '../../nfa/NFADesign.js';
import NFARuleBook from '../../nfa/NFARuleBook.js';
import Empty from './Empty.js';

/**
 * 正则 '*'，找到一个模式的0-n次
 */
export default class Repeat extends Empty {
  precedence = 2;

  constructor(pattern) {
    super();
    this.pattern = pattern;
  }

  toString = () => `${this.pattern.bracket(this.precedence)}*`;

  /**
   * a* 
   * 从它的接受状态到开始状态增加一个自由移动，使其可以与多个'a'匹配
   * 增加一个可自由移动到旧的开始状态的新状态，并使其作为接受状态，就可以匹配空字符串
   */
  toNfaDesign = () => {
    const nfaDesign = this.pattern.toNfaDesign();

    const startState = new Object();
    const acceptStates = [...nfaDesign.acceptStates, startState];

    const rules = nfaDesign.ruleBook.rules;
    const extraRules = [...nfaDesign.acceptStates.map(
      acceptState => new FARule(acceptState, null, nfaDesign.startState)
    ), new FARule(startState, null, nfaDesign.startState)];

    const ruleBook = new NFARuleBook(rules.concat(extraRules));
    return new NFADesign(startState, acceptStates, ruleBook);
  }
}