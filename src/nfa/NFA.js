/**
 * 对每一个输入序列可以有多条执行路径，在向下一状态转移时有多可能性
 * NFA按照可能性而不是确定性工作，我们根据可能发生的来讨论它的行为
 * 
 * 一台NFA在向下一个状态转移时有多种可能性，也可能根本无法转移
 * 如果存在某条路径能让NFA按照它的某些规则执行并终止于一个接受状态，那它就能接受这个string
 * 也就是说：即使不是必然的，只要终止于一个接受状态是可能的就可以
 * 
 * 在确定性计算机上模拟NFA，关键是找到一种方法探索出这台机器所有可能的执行，尝试遍历所有可能，查看哪个最终达到一个接受状态
 * 这里用最终NFA当前所有可能的状态模拟一台简单NFA
 */
export default class NFA {
  /**
   * @param {number[]} _currentStates Set
   * @param {number[]} acceptStates 
   * @param {NFARuleBook} ruleBook 
   */
  constructor(_currentStates, acceptStates, ruleBook) {
    this._currentStates = _currentStates;
    this.acceptStates = acceptStates;
    this.ruleBook = ruleBook;
  }

  /**
   * currentStates由从一个特点集合的状态开始，通过自由移动所能达到的所有状态得出
   */
  get currentStates() {
    return this.ruleBook.followFreeMoves(this._currentStates);
  }
  set currentStates(val) {
    this._currentStates = val;
  }

  get accepting() {
    return this.currentStates.some(item => this.acceptStates.includes(item));
  }

  /**
   * 读取当前字符后，更新当前状态合集
   * @param {*} char 
   */
  readChar = (char) => {
    this.currentStates = this.ruleBook.nextStates(this.currentStates, char);
  }

  readString = (string) => {
    string.split('').forEach(char => this.readChar(char));
  }
}