// import NFA from "../nfa/NFA.js";
import NFARuleBook from "../nfa/NFARuleBook.js";

import FARule from "../common/FARule.js";
import NFA from "../nfa/NFA.js";
import NFADesign from "../nfa/NFADesign.js";
import NFARulebook from "../nfa/NFARulebook.js";

const ruleBook = new NFARuleBook([
  new FARule(1, 'a', 1), new FARule(1, 'a', 2), new FARule(1, null, 2),
  new FARule(2, 'b', 3),
  new FARule(3, 'b', 1), new FARule(3, null, 2),
])
const nfaDesign = new NFADesign(1, [3], ruleBook);

console.log('-----测试NFADesign.toNfa可以从任何状态集合起步-----')
console.log(nfaDesign.toNfa().currentStates); // [1,2]
console.log(nfaDesign.toNfa([2]).currentStates); // [2]
console.log(nfaDesign.toNfa([3]).currentStates); // [3,2]
