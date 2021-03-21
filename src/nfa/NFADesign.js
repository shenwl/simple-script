import NFA from "./NFA.js";

export default class NFADesign {
  constructor(startState, acceptStates, ruleBook) {
    this.startState = startState;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  toNfa = () => {
    return new NFA([this.startState], this.acceptStates, this.ruleBook);
  }

  accepts = (str) => {
    const nfa = this.toNfa();
    nfa.readString(str);
    return nfa.accepting;
  }
}
