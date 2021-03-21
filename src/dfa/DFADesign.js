import DFA from "./DFA.js";

export default class DFADesign {
  constructor(startState, acceptStates, ruleBook) {
    this.startState = startState;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  toDfa = () => {
    return new DFA(this.startState, this.acceptStates, this.ruleBook);
  }

  accepts = (str) => {
    const dfa = this.toDfa();
    dfa.readString(str);
    return dfa.accepting;
  }
}
