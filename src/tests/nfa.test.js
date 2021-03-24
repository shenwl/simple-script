// import NFA from "../nfa/NFA.js";
import NFARuleBook from "../nfa/NFARuleBook.js";

import FARule from "../common/FARule.js";
import NFA from "../nfa/NFA.js";
import NFADesign from "../nfa/NFADesign.js";
import NFARulebook from "../nfa/NFARulebook.js";

const ruleBook = new NFARuleBook([
  new FARule(1, 'a', 1), new FARule(1, 'b', 1), new FARule(1, 'b', 2),
  new FARule(2, 'a', 3), new FARule(2, 'b', 3),
  new FARule(3, 'a', 4), new FARule(3, 'b', 4),
])

console.log('-----测试NFARuleBook-----')
console.log(ruleBook.nextStates([1], 'a'));
console.log(ruleBook.nextStates([1, 2], 'b'));
console.log(ruleBook.nextStates([1, 3], 'b'));


const nfa = new NFA([1], [4], ruleBook);
console.log('-----测试NFA-----')
console.log(nfa.accepting);
nfa.readChar('b');
console.log(nfa.accepting);
nfa.readChar('a');
console.log(nfa.accepting);
nfa.readChar('b');
console.log(nfa.accepting);

console.log('-----测试NFA2 readString-----')
const nfa2 = new NFA([1], [4], ruleBook);
console.log(nfa2.accepting);
nfa2.readString('bbbbb');
console.log(nfa2.accepting);

console.log('-----测试NFADesign-----')
const nfaDesign = new NFADesign(1, [4], ruleBook);

console.log(nfaDesign.accepts('b'));
console.log(nfaDesign.accepts('bab'));
console.log(nfaDesign.accepts('bbbbb'));
console.log(nfaDesign.accepts('aaab'));

console.log('-----测试NFARulebook followFreeMoves 从状态1自由移动一次能到什么状态-----')
const rulebook2 = new NFARulebook([
  new FARule(1, null, 2), new FARule(1, null, 4), new FARule(2, 'a', 3),
  new FARule(3, 'a', 2),
  new FARule(4, 'a', 5),
  new FARule(5, 'a', 6),
  new FARule(6, 'a', 4)
])
console.log(rulebook2.followFreeMoves([1]));

console.log('-----测试NFADesign识别字符串-----')
const nfaDesign2 = new NFADesign(1, [2, 4], rulebook2);

console.log(nfaDesign2.accepts('aa')); // true
console.log(nfaDesign2.accepts('aaa')); // true
console.log(nfaDesign2.accepts('aaaaa')); // false
console.log(nfaDesign2.accepts('aaaaaa')); // true
