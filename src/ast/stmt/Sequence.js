import DoNothing from "./DoNothing.js";

export default class Sequence {
  reducible = true;

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  toString = () => `${this.first.toString()};${this.second.toString()}`;

  reduce = (enviroment) => {
    if (DoNothing.equal(this.first)) {
      return [this.second, enviroment];
    }
    const [reducedFirst, reducedEnv] = this.first.reduce(enviroment);
    return [new Sequence(reducedFirst, this.second), reducedEnv];
  }

  evaluate = (enviroment) => {
    return this.second.evaluate(this.first.evaluate(enviroment));
  }

  toJavaScript = (enviroment) => {
    eval(`this.second.toJavaScript(this.first.toJavaScript(enviroment))`);
    return enviroment;
  };
}