import Number from '../Number.js';

export default class Multiply {
  reducible = true;

  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  toString = () => `${this.left.toString()}*${this.right.toString()}`;

  reduce = (enviroment) => {
    if (this.left.reducible) {
      return new Multiply(this.left.reduce(enviroment), this.right);
    }
    if (this.right.reducible) {
      return new Multiply(this.left, this.right.reduce(enviroment));
    }
    return new Number(this.left.value * this.right.value);
  }

  evaluate = (enviroment) => {
    return new Number(this.left.evaluate(enviroment).value * this.right.evaluate(enviroment).value);
  }

  toJavaScript = (enviroment) => {
    return `${this.left.toJavaScript(enviroment)} * ${this.right.toJavaScript(enviroment)}`;
  };
}