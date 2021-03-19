export default class Variable {
  reducible = true;

  constructor(name) {
    this.name = name;
  }

  toString = () => `${this.name}`;

  reduce = (enviroment) => enviroment[this.name];
  evaluate = (enviroment) => enviroment[this.name];
  toJavaScript = () => `e['${this.name}']`;
}