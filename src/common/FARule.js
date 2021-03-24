export default class FARule {
  /**
   * @param {*} state 当前状态
   * @param {*} char 接收的字符
   * @param {*} nextState 下一个状态
   */
  constructor(state, char, nextState) {
    this.state = state;
    this.char = char;
    this.nextState = nextState;
  }

  /**
   * 指示这个规则可以在某个特定情况下应用
   * @param {*} state 
   * @param {*} char 
   */
  applyTo = (state, char) => {
    return (this.state === state) && (this.char === char);
  }

  /**
   * 在决定采用哪条规则后，返回关于机器应该如何改变的信息
   */
  follow = () => this.nextState;

  toString = () => `FARule ${this.state.toString()} -- ${this.char} --> ${this.nextState.toString()}`;
}