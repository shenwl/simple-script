import Choose from "../parser/pattern/Choose.js";
import Concatenate from "../parser/pattern/Concatenate.js";
import Empty from "../parser/pattern/Empty.js";
import Literal from "../parser/pattern/Literal.js";
import Repeat from "../parser/pattern/Repeat.js";

// /(ab|a)*/
const pattern1 = new Repeat(new Choose(
  new Concatenate(new Literal('a'), new Literal('b')),
  new Literal('a'),
));
console.log('----测试pattern，/(ab|a)*/-----')
console.log(pattern1.toString())

console.log('----测试pattern，Empty.toNfaDesign-----')
const nfaDesign1 = new Empty().toNfaDesign();
console.log(nfaDesign1.accepts(''));
console.log(nfaDesign1.accepts('a'));

console.log('----Literal.toNfaDesign-----')
const nfaDesign2 = new Literal('a').toNfaDesign();
console.log(nfaDesign2.accepts(''));
console.log(nfaDesign2.accepts('a'));

console.log('----测试pattern，Empty.matches-----')
console.log(new Literal('a').matches(''));
console.log(new Literal('a').matches('aa'));

console.log('----测试pattern，Concatenate.matches-----')
const pattern3 = new Concatenate(new Literal('a'), new Literal('b'));
console.log(pattern3.matches('a'));
console.log(pattern3.matches('ab'));
console.log(pattern3.matches('aab'));

console.log('----测试pattern，Choose.matches-----')
const pattern4 = new Choose(new Literal('a'), new Literal('b'));
console.log(pattern4.matches('a'));
console.log(pattern4.matches('b'));
console.log(pattern4.matches('ab'));

console.log('----测试pattern，Repeat.matches-----')
const pattern5 = new Repeat(new Literal('a'));
console.log(pattern5.matches('a'));
console.log(pattern5.matches(''));
console.log(pattern5.matches('aaa'));
console.log(pattern5.matches('aab'));

console.log('----测试pattern组合: /(a(|b))*/-----')
const pattern6 = new Repeat(
  new Concatenate(
    new Literal('a'), 
    new Choose(new Empty(), new Literal('b'))
  )
);
console.log(pattern6.matches('')); // true
console.log(pattern6.matches('a')); // true
console.log(pattern6.matches('aaa')); // true
console.log(pattern6.matches('aab')); // true
console.log(pattern6.matches('aba')); // true
console.log(pattern6.matches('abba')); // false