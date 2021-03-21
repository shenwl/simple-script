import { flatMap } from '../common/utils.js';

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
  nextState = (states, char) => {
    return [...new Set(flatMap(states.map(state => this.followRulesFor(state, char))))];
  }

  followRulesFor = (state, char) => {
    return this.rulesFor(state, char).map(rule => rule.follow());
  }

  rulesFor = (state, char) => {
    return (this.rules || []).filter(rule => rule.applyTo(state, char));
  }
}