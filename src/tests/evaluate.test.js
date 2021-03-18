/**
 * 测试大步语义
 */
import Number from '../ast/Number.js';
import Boolean from '../ast/Boolean.js';
import Variable from '../ast/Variable.js';

import Multiply from '../ast/operation/Multiply.js';
import Add from '../ast/operation/Add.js';
import LessThan from '../ast/operation/LessThan.js';

import DoNothing from '../ast/stmt/DoNothing.js';
import Assign from '../ast/stmt/Assign.js';
import If from '../ast/stmt/If.js';
import While from '../ast/stmt/While.js';


const testResult1 = new While(
  new LessThan(new Variable('x'), new Number(10)),
  new Assign('x', new Multiply(new Variable('x'), new Number(2))),
).evaluate({ x: new Number(1) });


console.log('-----evaluate test1 while/lessThan/assign-----');
console.log(testResult1);