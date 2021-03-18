import DoNothing from './DoNothing.js';

export default class Assign {
  reducible = true;

  constructor(name, expr) {
    this.name = name;
    this.expr = expr;
  }

  toString = () => `${this.name}=${this.expr.toString()}`;

  reduce = (enviroment) => {
    if (this.expr.reducible) {
      return [new Assign(this.name, this.expr.reduce(enviroment)), enviroment];
    }
    return [new DoNothing(), { ...enviroment, [this.name]: this.expr }];
  }
}