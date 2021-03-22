import Empty from './Empty.js';
/**
 * 连接两个模式
 */
export default class Concatenate extends Empty {
  precedence = 1;

  constructor(first, second) {
    super();
    this.first = first;
    this.second = second;
  }

  toString = () => [this.first, this.second].map(pattern => pattern.bracket(this.precedence)).join('');
}