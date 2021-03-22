import Empty from './Empty.js';

/**
 * 正则 '*'，找到一个模式的0-n次
 */
export default class Repeat extends Empty {
  precedence = 2;

  constructor(pattern) {
    super();
    this.pattern = pattern;
  }

  toString = () => `${this.pattern.bracket(this.precedence)}*`;
}