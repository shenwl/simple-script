export default class Machine {
  constructor(stmt, enviroment) {
    this.stmt = stmt;
    this.enviroment = enviroment;
  }

  step = () => {
    const [stmt, env] = this.stmt.reduce(this.enviroment);
    this.stmt = stmt;
    this.enviroment = env;
  }
  run = () => {
    while (this.stmt.reducible) {
      this.step();
    }
  }
}