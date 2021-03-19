export default class DoNothing {
  reducible = false;

  static equal = (expr) => expr instanceof DoNothing;

  toString = () => `doNothing`;

  evaluate = (enviroment) => {
    return enviroment;
  }

  toJavaScript = (enviroment) => void(0);
}