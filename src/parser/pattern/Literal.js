import FARule from '../../common/FARule.js';
import NFADesign from '../../nfa/NFADesign.js';
import NFARuleBook from '../../nfa/NFARuleBook.js';
import Empty from './Empty.js';
/**
 * 匹配字符
 */
export default class Literal extends Empty {
  precedence = 3;

  constructor(char) {
    super();
    this.char = char;
  }

  toString = () => this.char;

  toNfaDesign = () => {
    const startState = new Object();
    const acceptState = new Object();

    const rule = new FARule(startState, this.char, acceptState);
    const ruleBook = new NFARuleBook([rule]);
    return new NFADesign(startState, [acceptState], ruleBook);
  }
}