/**
 * 测试指称语义
 */
import Number from '../ast/Number.js';
import Boolean from '../ast/Boolean.js';
import Variable from '../ast/Variable.js';

import Add from '../ast/operation/Add.js';
import LessThan from '../ast/operation/LessThan.js';
import Assign from '../ast/stmt/Assign.js';
import If from '../ast/stmt/If.js';
import While from '../ast/stmt/While.js';
import Multiply from '../ast/operation/Multiply.js';
import DoNothing from '../ast/stmt/DoNothing.js';

console.log('-----denotational.test add/variable/number/toJavaScript-----')
console.log(eval('var e = {x: 1};' + new Add(new Variable('x'), new Number(10)).toJavaScript()));

console.log('-----denotational.test lessThan/variable/number/toJavaScript-----')
console.log(eval('var e = {x: 1};' + new LessThan(new Variable('x'), new Number(10)).toJavaScript()));

console.log('-----denotational.test assign-----')
console.log(eval('var e = {x: 1};' + new Assign('x', new Number(10)).toJavaScript()));

console.log('-----denotational.test while-----')
console.log('var e = {x: 1};' + new While(
  new LessThan(new Variable('x'), new Number(10)),
  new Assign('x', new Multiply(new Variable('x'), new Number(3))),
).toJavaScript());

console.log('-----denotational.test if-----')
console.log(eval('var e = {x: 5};' + new If(
  new LessThan(new Variable('x'), new Number(4)),
  new Assign('x', new Number(10)),
  new Assign('x', new Number(20)),
).toJavaScript()));
