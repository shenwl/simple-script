export default class DFARuleBook {
  constructor(rules) {
    this.rules = rules;
  }

  /**
   * 定位到正确的规则，并找到DFA接下来的状态
   * @param {*} state 
   * @param {*} char 
   */
  nextState = (state, char) => {
    const rule = this.ruleFor(state, char);
    if (!rule) throw Error(`can not find rule for state: ${state}, char: ${char} !`);
    if (Array.isArray(rule)) {
      return rule.map(r => r.follow());
    }
    return rule.follow();
  }

  /**
   * DFA在确定性约束下才能工作，ruleFor返回null程序直接崩溃
   * @param {*} state 
   * @param {*} char 
   */
  ruleFor = (state, char) => {
    let matchRules = [];

    (this.rules || []).forEach(item => {
      if (item.applyTo(state, char)) {
        matchRules.push(item);
      }
    });
    return matchRules.length > 1 ? matchRules : matchRules[0];
  }
}