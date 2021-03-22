import Empty from './Empty.js';

/**
 * 正则 '|'，在两个模式之间选择
 */
export default class Choose extends Empty {
  precedence = 0;

  constructor(first, second) {
    super();
    this.first = first;
    this.second = second;
  }

  toString = () => [this.first, this.second].map(pattern => pattern.bracket(this.precedence)).join('|');
}