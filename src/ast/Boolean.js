export default class Boolean {
  reducible = false;

  constructor(value) {
    this.value = value;
  }
  toString = () => this.value ? 'true' : 'false';
  evaluate = () => this;
  toJavaScript = () => this.value;
}