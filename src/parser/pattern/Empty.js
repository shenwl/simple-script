/**
 * 正则空
 * pattern下每个类都有precedence属性，bracket和toString方法
 */
export default class Empty {
  precedence = 3;

  bracket = (outerPrecedence) => {
    if (this.precedence < outerPrecedence) {
      return `(${this.toString()})`;
    }
    return this.toString();
  }

  toString = () => '';
}