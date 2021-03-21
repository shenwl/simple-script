// import NFA from "../nfa/NFA.js";
import NFARuleBook from "../nfa/NFARuleBook.js";

import FARule from "../common/FARule.js";
import NFA from "../nfa/NFA.js";
import NFADesign from "../nfa/NFADesign.js";

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