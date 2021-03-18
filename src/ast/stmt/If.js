export default class If {
  reducible = true;

  constructor(condition, consequence, alternative) {
    this.condition = condition;
    this.consequence = consequence;
    this.alternative = alternative;
  }

  toString = () => `if(${this.condition.toString()}){${this.consequence.toString()}}else{${this.alternative.toString()}}`;

  reduce = (enviroment) => {
    if (this.condition.reducible) {
      return [new If(this.condition.reduce(enviroment), this.consequence, this.alternative), enviroment];
    }
    if (this.condition.value) {
      return [this.consequence, enviroment];
    } else {
      return [this.alternative, enviroment];
    }
  }

  evaluate = (enviroment) => {
    if (this.condition.evaluate(enviroment).value) {
      return this.consequence.evaluate(enviroment);
    } else {
      return this.alternative.evaluate(enviroment);
    }
  }
}