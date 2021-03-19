export default class Number {
  reducible = false;

  constructor(value) {
    this.value = value;
  }
  toString = () => `${this.value}`;
  evaluate = () => this;
  toJavaScript = (enviroment) => eval(this.toString());
}