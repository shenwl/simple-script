import { includeArray } from '../common/utils.js';

export default class DFA {
  /**
   * 
   * @param {*} currentState 当前状态
   * @param {*} acceptStates 接受的状态集合(去重数组)，到了这个状态等于匹配完成，accepting = true
   * @param {DFARuleBook} ruleBook 规则手册
   */
  constructor(currentState, acceptStates, ruleBook) {
    this.currentState = currentState;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  /**
   * @returns {boolean} 处于接受状态
   */
  get accepting() {
    return includeArray(this.acceptStates, this.currentState);
  }

  /**
   * 读取一个字符，查阅规则手册，改变状态
   * @param {*} char 
   */
  readChar = (char) => {
    this.currentState = this.ruleBook.nextState(this.currentState, char);
  }

  readString = (string) => {
    string.split('').forEach(char => this.readChar(char));
  }
}