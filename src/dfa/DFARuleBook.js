export default class DFARuleBook {
  constructor(rules) {
    this.rules = rules;
  }

  nextState = (state, char) => {
    return this.ruleFor(state, char).follow();
  }

  /**
   * DFA在确定性约束下才能工作，ruleFor返回null程序直接崩溃
   * @param {*} state 
   * @param {*} char 
   */
  ruleFor = (state, char) => {
    let rule = null;

    (this.rules || []).forEach(item => {
      if (item.applyTo(state, char)) {
        rule = item;
      }
    });
    return rule;
  }
}