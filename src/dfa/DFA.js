export default class DFA {
  constructor(currentState, acceptStates, ruleBook) {
    this.currentState = currentState;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  get accepting() {
    return (this.acceptStates || []).includes(this.currentState)
  }

  readChar = (char) => {
    this.currentState = this.ruleBook.nextState(this.currentState, char);
  }

  readString = (string) => {
    string.split('').forEach(char => this.readChar(char));
  }
}