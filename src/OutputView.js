const MissionUtils = require("@woowacourse/mission-utils");
const Messages = require("./Messages");

const OutputView = {
  startMessage() {
    MissionUtils.Console.print(Messages.startMessage);
  },
  missMessage() {
    MissionUtils.Console.print(Messages.missMessage);
  },
  threeStrikeMessage() {
    MissionUtils.Console.print(Messages.threeStrikeMessage);
  },
  ballStrikeMessage(result) {
    MissionUtils.Console.print(Messages.ballStrikeMessage(result));
  },
  ballMessage(result) {
    MissionUtils.Console.print(Messages.ballMessage(result));
  },
  strikeMessage(result) {
    MissionUtils.Console.print(Messages.strikeMessage(result));
  },
  reGameMessage() {
    MissionUtils.Console.print(Messages.reGameMessageFirst);
    MissionUtils.Console.print(Messages.reGameMessageSecond);
  },
};

module.exports = OutputView;
