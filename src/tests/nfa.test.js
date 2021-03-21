// import NFA from "../nfa/NFA.js";
import NFARuleBook from "../nfa/NFARuleBook.js";

import FARule from "../common/FARule.js";

const ruleBook = new NFARuleBook([
  new FARule(1, 'a', 1), new FARule(1, 'b', 1), new FARule(1, 'b', 2),
  new FARule(2, 'a', 3), new FARule(2, 'b', 3),
  new FARule(3, 'a', 4), new FARule(3, 'b', 4),
])

console.log('-----测试DFARuleBook-----')
console.log(ruleBook.nextState([1], 'a'));
console.log(ruleBook.nextState([1, 2], 'b'));
console.log(ruleBook.nextState([1, 3], 'b'));