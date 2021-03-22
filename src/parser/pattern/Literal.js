import Empty from './Empty.js';
/**
 * 匹配字符
 */
export default class Literal extends Empty {
  precedence = 3;

  constructor(char) {
    this.char = char;
  }

  toString = () => this.char;
}