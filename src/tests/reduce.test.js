/**
 * 测试小步语义
 */
import Machine from '../common/machine.js';

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
import Sequence from '../ast/stmt/Sequence.js';


// machine.run(`window.x = 2; var x = 1 * 2 + 3 * 4`)
/** ast:
 *            Assign
 *    x                     Add
 *              Multiply               Multiply
 *         Number(1)  Number(2)   Number(2)   Number(4)
 * 
 * env: x = Number(2)
 */
const testResult1 = new Machine(new Assign('x', new Add(
  new Multiply(new Number(1), new Number(2)),
  new Multiply(new Number(3), new Number(4)),
)), { x: new Number(2) });
testResult1.run();


const testResult2 = new Machine(new If(
  new Variable('x'),
  new Assign('y', new Number(2)),
  new Assign('y', new Number(4)),
), { x: new Boolean(true) });
testResult2.run();

const testResult3 = new Machine(new Sequence(
  new Assign('x', new Number(2)),
  new Assign('y', new Number(4)),
), {});
testResult3.run();

const testResult4 = new Machine(new While(
  new LessThan(new Variable('x'), new Number(10)),
  new Assign('x', new Multiply(new Variable('x'), new Number(2))),
), { x: new Number(2) });
testResult4.run();


console.log('-----reduce test1 assign/multiply/add/number-----');
console.log(testResult1);
console.log('-----reduce test2 if/variable/assign/bool-----');
console.log(testResult2);
console.log('-----reduce test3 sequence-----');
console.log(testResult3);
console.log('-----reduce test4 while/less/Than-----');
console.log(testResult4);