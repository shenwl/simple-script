import { flatMap, isContain } from '../common/utils.js';

/**
 * NFARuleBook：在NFA处于几种可能状态之一时，读取一个特定的字符，可能的下一个状态是什么？
 */
export default class NFARuleBook {
  constructor(rules) {
    this.rules = rules;
  }

  /**
   * 
   * @param {Set} states 
   * @param {character} char 
   */
  nextStates = (states, char) => {
    return [...new Set(flatMap(states.map(state => this.followRulesFor(state, char))))];
  }

  followRulesFor = (state, char) => {
    return this.rulesFor(state, char).map(rule => rule.follow());
  }

  rulesFor = (state, char) => {
    return (this.rules || []).filter(rule => rule.applyTo(state, char));
  }

  /**
   * 从一个特点集合的状态开始，通过自由移动所能达到的所有状态
   * @param {set} states 
   */
  followFreeMoves = (states) => {
    const moreStates = this.nextStates(states, null);
    if (isContain(states, moreStates)) {
      return states;
    }
    return this.followFreeMoves([...new Set(states.concat(moreStates))]);
  }
}