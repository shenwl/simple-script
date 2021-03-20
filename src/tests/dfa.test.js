import DFA from "../dfa/DFA.js";
import DFADesign from "../dfa/DFADesign.js";
import DFARuleBook from "../dfa/DFARuleBook.js";
import FARule from "../dfa/FARule.js";

const ruleBook = new DFARuleBook([
  new FARule(1, 'a', 2), new FARule(1, 'b', 1),
  new FARule(2, 'a', 2), new FARule(2, 'b', 3),
  new FARule(3, 'a', 3), new FARule(3, 'b', 3),
])

console.log('-----测试DFARuleBook-----')
console.log(ruleBook.nextState(1, 'a'));
console.log(ruleBook.nextState(1, 'b'));
console.log(ruleBook.nextState(2, 'b'));

const dfa = new DFA(1, [3], ruleBook);

console.log('-----测试DFA-----')
console.log(dfa.accepting);
dfa.readChar('b');
console.log(dfa.accepting);
dfa.readString('aaaa');
console.log(dfa.accepting);
dfa.readString('aaab');
console.log(dfa.accepting);

const dfaDesign = new DFADesign(1, [3], ruleBook);

console.log('-----测试DFADesign-----')
console.log(dfaDesign.accepts('b'));
console.log(dfaDesign.accepts('aaaa'));
console.log(dfaDesign.accepts('aaab'));
