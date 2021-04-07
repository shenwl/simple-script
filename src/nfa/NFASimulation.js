import FARule from "../common/FARule.js";
import { flat, deepContain, uniqueArrays } from '../common/utils.js';
import DFADesign from "../dfa/DFADesign.js";
import DFARuleBook from "../dfa/DFARuleBook.js";

export default class NFASimulation {
  constructor(nfaDesign) {
    this.nfaDesign = nfaDesign;
  }

  /**
   * 计算模拟的状态如何根据某一特定的输入而改变
   * @param {*} states 出发状态集合
   */
  nextState = (states, char) => {
    const nfa = this.nfaDesign.toNfa(states);
    nfa.readChar(char);
    return nfa.currentStates;
  }

  /**
   * 从一个特定状态出发，有哪些FARule
   * @param {*} states 出发状态
   */
  rulesFor = (states) => {
    return this.nfaDesign.ruleBook.alphabet.map(
      char => new FARule(states, char, this.nextState(states, char))
    );
  }

  /**
   * 从起点探索，递归找出所有状态和规则
   * @param {*} states 出发状态
   */
  discoverStatesAndRules = (states) => {
    const rules = flat(states.map(stateSet => {
      return this.rulesFor(stateSet);
    }));
    const moreStates = rules.map(rule => rule.follow());

    if (deepContain(states, moreStates)) return [states, rules];
    return this.discoverStatesAndRules(uniqueArrays(states.concat(moreStates)));
  }

  /**
   * 生成NFADesign
   */
  toDfaDesign = () => {
    const startStates = this.nfaDesign.currentStates;
    const [states, rules] = this.discoverStatesAndRules([startStates]);
    const acceptStates = states.filter(state => this.nfaDesign.toNfa(state).accepting);

    return new DFADesign(startStates, acceptStates, new DFARuleBook(rules));
  }
}