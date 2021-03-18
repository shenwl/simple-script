import DoNothing from "./DoNothing.js";
import Sequence from "./Sequence.js";
import If from "./If.js";

export default class While {
  reducible = true;

  constructor(condition, body) {
    this.condition = condition;
    this.body = body;
  }

  toString = () => `while(${this.condition.toString()}){${this.body.toString()}}`;

  reduce = (enviroment) => {
    return [
      new If(this.condition, new Sequence(this.body, this), new DoNothing),
      enviroment,
    ];
  }

  evaluate = (enviroment) => {
    if (this.condition.evaluate(enviroment).value) {
      return this.evaluate(this.body.evaluate(enviroment));
    } else {
      return enviroment;
    }
  }
}