export default class FARule {
  constructor(state, char, nextState) {
    this.state = state;
    this.char = char;
    this.nextState = nextState;
  }

  applyTo = (state, char) => {
    return (this.state === state) && (this.char === char);
  }

  follow = () => this.nextState;

  toString = () => `FARule ${this.state.toString()} -- ${this.char} --> ${this.nextState.toString()}`;
}