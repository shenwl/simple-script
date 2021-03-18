export default class Number {
  reducible = false;

  constructor(value) {
    this.value = value;
  }
  toString = () => `${this.value}`;
}