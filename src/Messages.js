const Messages = {
  startMessage: "숫자 야구 게임을 시작합니다.",
  missMessage: "낫싱",
  threeStrikeMessage: "3스트라이크",
  ballStrikeMessage: (command) => `${command[0]}볼 ${command[1]}스트라이크`,
  ballMessage: (command) => `${command[0]}볼`,
  strikeMessage: (command) => `${command[1]}스트라이크`,
  reGameMessageFirst: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  reGameMessageSecond: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요",
};
module.exports = Messages;
