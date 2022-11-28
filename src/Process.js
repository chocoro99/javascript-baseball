const InputView = require("./InputView");
const OutputView = require("./OutputView");
const ComputerNumber = require("./ComputerNumber");
const Baseball = require("./Baseball");

class Process {
  constructor() {
    this.baseball = new Baseball();
  }
  play() {
    OutputView.startMessage();
    this.baseball.setComputer(ComputerNumber.numberCreate());
    this.resultGame();
  }

  resultGame() {
    let result = this.baseball.ballAndStrike(InputView.inputNumber());
    this.resultMessage(result);
    if (result[1] !== 3) this.resultGame();
    else this.reGame();
  }

  resultMessage(result) {
    if (result[0] === 0 && result[1] === 0) return OutputView.missMessage();
    if (result[1] === 3) return OutputView.threeStrikeMessage();
    if (result[0] !== 0 && result[1] !== 0)
      return OutputView.ballStrikeMessage(result);
    if (result[0] !== 0 && result[1] === 0)
      return OutputView.ballMessage(result);
    if (result[0] === 0 && result[1] !== 0 && result[1] !== 3)
      return OutputView.strikeMessage(result);
  }

  reGame() {
    OutputView.reGameMessage();
    if (InputView.inputReGame() === "1") {
      this.baseball.setComputer(ComputerNumber.numberCreate());
      this.resultGame();
    }
  }
}
module.exports = Process;
