interface ASTNode {
  reducible: boolean;
  reduce?: (enviroment: any) => null;
  eval: () => any;
  evaluate: (enviroment: any) => null;
  toString: () => string;
}

interface Boolean extends ASTNode {
  value: boolean;
}
interface Number extends ASTNode {
  value: number;
}

interface Variable extends ASTNode {
  name: string;
}

interface Add extends ASTNode {
  left: ASTNode;
  right: ASTNode;
}
interface LessThan extends ASTNode {
  left: ASTNode;
  right: ASTNode;
}
interface Multiply extends ASTNode {
  left: ASTNode;
  right: ASTNode;
}

interface DoNothing extends ASTNode { }
interface If extends ASTNode { }
interface While extends ASTNode { }
interface Sequence extends ASTNode { }