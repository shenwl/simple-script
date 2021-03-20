import DFA from "./DFA.js";

export default class DFADesign {
  constructor(startStates, acceptStates, ruleBook) {
    this.startStates = startStates;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  toDfa = () => {
    return new DFA(this.startStates, this.acceptStates, this.ruleBook);
  }

  accepts = (str) => {
    const dfa = this.toDfa();
    dfa.readString(str);
    return dfa.accepting;
  }
}
