/**
 * 测试指称语义
 */
import Number from '../ast/Number.js';
import Boolean from '../ast/Boolean.js';
import Variable from '../ast/Variable.js';

import Add from '../ast/operation/Add.js';
import LessThan from '../ast/operation/LessThan.js';

console.log('-----denotational.test add/variable/number/toJavaScript-----')
console.log(new Add(new Variable('x'), new Number(10)).toJavaScript({ x: new Number(1) }));

console.log('-----denotational.test lessThan/variable/number/toJavaScript-----')
console.log(new LessThan(new Variable('x'), new Number(10)).toJavaScript({ x: new Number(1) }));

