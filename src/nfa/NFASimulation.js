
export default class NFASimulation {
  constructor(nfaDesign) {
    this.nfaDesign = nfaDesign;
  }
  
  /**
   * 计算模拟的状态如何根据某一特定的输入而改变
   */
  nextState = (state, char) => {
    const nfa = this.nfaDesign.toNfa(state);
    nfa.readChar(char);
    return nfa.currentStates;
  }
}