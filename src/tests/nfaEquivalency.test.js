/**
 * 测试等价性
 */
// import NFA from "../nfa/NFA.js";
import NFARuleBook from "../nfa/NFARuleBook.js";

import FARule from "../common/FARule.js";
import NFA from "../nfa/NFA.js";
import NFADesign from "../nfa/NFADesign.js";
import NFARulebook from "../nfa/NFARulebook.js";
import NFASimulation from "../nfa/NFASimulation.js";

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

const nfa = nfaDesign.toNfa([2, 3]);
nfa.readChar('b');
console.log(nfa.currentStates); // [3, 1, 2]

console.log('-----测试NFASimulation完成上面的手动步骤-----')
const simulation = new NFASimulation(nfaDesign);
console.log(simulation.nextState([2, 3], 'b'))  // [3,1,2]
console.log(simulation.nextState([1, 2], 'a'))  // [1,2]
console.log(simulation.nextState([1, 2], 'b'))  // [3,2]
console.log(simulation.nextState([1, 3, 2], 'b'))  // [1,3,2]
console.log(simulation.nextState([1, 3, 2], 'a'))  // [1,2]

console.log('-----测试NFARuleBook.alphabet-----')
console.log(ruleBook.alphabet);
console.log('-----测试NFASimulation.rulesFor-----')
console.log(simulation.rulesFor([1,2]));


