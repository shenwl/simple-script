import DFA from "./DFA.js";

/**
 * 用于封装DFA的重新创建等一系列操作
 * @description DFA获取输入后不再处于起始状态，检测一个新的序列需要重头创建
 */
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
