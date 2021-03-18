interface Enviroment {
  data: any;
  get: (key: string) => any;
  set: (key: string, value: any) => void;
  merge: (data: any) => void;
}

interface ASTNode {
  reducible: boolean;
  reduce: (enviroment: Enviroment) => null;
  evaluate: (enviroment: Enviroment) => null;
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