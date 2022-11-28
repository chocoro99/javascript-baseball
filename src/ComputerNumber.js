const MissionUtils = require("@woowacourse/mission-utils");

const ComputerNumber = {
  numberCreate() {
    let computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};
module.exports = ComputerNumber;
