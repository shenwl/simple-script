import NFA from "./NFA.js";

export default class NFADesign {
  constructor(startState, acceptStates, ruleBook) {
    this.startState = startState;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  /**
   * @param {*} currentStates 当前状态集合 
   * 让NFADesign可以从任意集合状态构造NFA，而不是只能从NFADesign的起始状态
   */
  toNfa = (currentStates = [this.startState]) => {
    return new NFA(currentStates, this.acceptStates, this.ruleBook);
  }

  accepts = (str) => {
    const nfa = this.toNfa();
    nfa.readString(str);
    return nfa.accepting;
  }
}
