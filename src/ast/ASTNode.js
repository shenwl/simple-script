/**
 * ASTNode，所有AST节点的基础类，规范了共有的属性和方法
 * 
 */
export default class ASTNode {
  constructor(reducible) {
    this.reducible = reducible;
  }
  reduce = (enviroment) => null;
  evaluate = (enviroment) => null;
  toString = () => '';
}