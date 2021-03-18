export default class Variable {
  reducible = true;

  constructor(name) {
    this.name = name;
  }

  toString = () => `${this.name}`;

  reduce = (enviroment) => enviroment[this.name];
}