export default class NFA {
  /**
   * @param {*} currentStates Set
   * @param {*} acceptStates Set
   * @param {*} ruleBook NFARuleBook
   */
  constructor(currentStates, acceptStates, ruleBook) {
    this.currentStates = currentStates;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  get accepting() {
    return this.currentStates.some(item => this.acceptStates.includes(item));
  }

  readChar = (char) => {
    if (!char || char.length !== 1) throw Error('invalid char: ' + char);
    this.currentStates = this.ruleBook.nextStates(this.currentStates, char);
  }

  readString = (string) => {
    string.split('').forEach(char => this.readChar(char));
  }
}