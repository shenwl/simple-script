import DFARuleBook from "../dfa/DFARuleBook.js";
import FARule from "../dfa/FARule.js";

const ruleBook = new DFARuleBook([
  new FARule(1, 'a', 2), new FARule(1, 'b', 1),
  new FARule(2, 'a', 2), new FARule(2, 'b', 3),
  new FARule(3, 'a', 3), new FARule(3, 'b', 3),
])

console.log('-----测试dfa-----')
console.log(ruleBook.nextState(1, 'a'));