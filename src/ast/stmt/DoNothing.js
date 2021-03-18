export default class DoNothing {
  reducible = false;

  static equal = (expr) => expr instanceof DoNothing;

  toString = () => `doNothing`;
}