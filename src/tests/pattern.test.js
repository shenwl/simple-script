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
console.log(nfaDesign2.accepts('b'));
