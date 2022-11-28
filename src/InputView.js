const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  inputNumber() {
    const regex = /^[0-9]{3}$/;
    let number = 0;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      number = answer;
    });
    if (!regex.test(number)) throw new Error();
    else return number;
  },
  inputReGame() {
    const regex = /^[1-2]{1}$/;
    let command = "";
    MissionUtils.Console.readLine("", (answer) => {
      command = answer;
    });
    if (!regex.test(command)) throw new Error();
    else return command;
  },
};
module.exports = InputView;
