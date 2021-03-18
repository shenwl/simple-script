import Number from '../Number.js';

export default class Add {
  reducible = true;

  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  toString = () => `${this.left.toString()}+${this.right.toString()}`;

  reduce = (enviroment) => {
    if (this.left.reducible) {
      return new Add(this.left.reduce(enviroment), this.right);
    }
    if (this.right.reducible) {
      return new Add(this.left, this.right.reduce(enviroment));
    }
    return new Number(this.left.value + this.right.value);
  }

  evaluate = (enviroment) => {
    return new Number(this.left.evaluate(enviroment).value + this.right.evaluate(enviroment).value);
  }
}