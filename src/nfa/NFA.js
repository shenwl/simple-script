export default class NFA {
  /**
   * @param {*} startStates Set
   * @param {*} acceptStates Set
   * @param {*} ruleBook NFARuleBook
   */
  constructor(_currentStates, acceptStates, ruleBook) {
    this._currentStates = _currentStates;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  get currentStates() {
    return this.ruleBook.followFreeMoves(this._currentStates);
  }
  set currentStates(val) {
    this._currentStates = val;
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