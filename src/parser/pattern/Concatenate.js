import Empty from './Empty.js';
/**
 * 连接两个模式
 */
export default class Concatenate extends Empty {
  precedence = 1;

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  toString = () => [first, second].map(pattern => pattern.bracket(this.precedence)).join();
}