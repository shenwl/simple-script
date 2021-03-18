export default class Enviroment {
  data = {}

  constructor(data) {
    this.data = data || {};
  }

  get = (key) => {
    return this.data[key];
  }
  set = (key, value) => {
    this.data[key] = value;
  }
  merge = (obj) => {
    this.data = { ...this.data, ...obj };
    return this;
  }
}