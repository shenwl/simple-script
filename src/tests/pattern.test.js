import Choose from "../parser/pattern/Choose.js";
import Concatenate from "../parser/pattern/Concatenate.js";
import Literal from "../parser/pattern/Literal.js";
import Repeat from "../parser/pattern/Repeat.js";

// /(ab|a)*/
const pattern1 = new Repeat(new Choose(
  new Concatenate(new Literal('a'), new Literal('b')),
  new Literal('a'),
));
console.log('----测试pattern，/(ab|a)*/-----')
console.log(pattern1.toString())