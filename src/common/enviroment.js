export default class Enviroment {
  data = {}

  constructor(data) {
    this.data = data || {};
  }

  get = (key) => {
    return this.data[key];
  }
  set = (key, value) => {
    return this.data[key] = value;
  }
  merge = (obj) => {
    return this.data = { ...this.data, ...obj };
  }
}