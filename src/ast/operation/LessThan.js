import Boolean from '../Boolean.js';

export default class LessThan {
  reducible = true;

  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  toString = () => `${this.left.toString()}<${this.right.toString()}`;

  reduce = (enviroment) => {
    if (this.left.reducible) {
      return new LessThan(this.left.reduce(enviroment), this.right);
    }
    if (this.right.reducible) {
      return new LessThan(this.left, this.right.reduce(enviroment));
    }
    return new Boolean(this.left.value < this.right.value);
  }

  evaluate = (enviroment) => {
    return new Boolean(this.left.evaluate(enviroment).value < this.right.evaluate(enviroment).value);
  }

  toJavaScript = (enviroment) => {
    return eval(`${this.left.toJavaScript(enviroment)} < ${this.right.toJavaScript(enviroment)}`)
  };
}