import FARule from "../common/FARule.js";

export default class NFASimulation {
  constructor(nfaDesign) {
    this.nfaDesign = nfaDesign;
  }

  /**
   * 计算模拟的状态如何根据某一特定的输入而改变
   */
  nextState = (state, char) => {
    const nfa = this.nfaDesign.toNfa(state);
    nfa.readChar(char);
    return nfa.currentStates;
  }

  /**
   * 从一个特定状态出发，有哪些FARule
   * @param {*} state 
   */
  rulesFor = (state) => {
    return this.nfaDesign.ruleBook.alphabet.map(
      char => new FARule(state, char, this.nextState(state, char))
    );
  }
}