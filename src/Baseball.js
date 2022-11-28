class Baseball {
  #computer;
  constructor(computer) {
    this.#computer = computer;
  }

  setComputer(computer) {
    this.#computer = computer;
  }

  getComputer() {
    return this.#computer;
  }

  ballAndStrike(number) {
    let strikeBall = [0, 0];
    for (let i = 0; i < 3; i++) {
      strikeBall[0] += this.ball(number, i);
      strikeBall[1] += this.strike(number, i);
    }
    return strikeBall;
  }

  ball(number, index) {
    if (
      this.#computer.includes(parseInt(number[index])) &&
      this.#computer[index] !== parseInt(number[index])
    ) {
      return 1;
    } else return 0;
  }

  strike(number, index) {
    if (
      this.#computer.includes(parseInt(number[index])) &&
      this.#computer[index] === parseInt(number[index])
    ) {
      return 1;
    } else return 0;
  }
}
module.exports = Baseball;
