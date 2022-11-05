const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerRandomNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };
  gameStart = () => {
    this.computerNumber = this.computerRandomNumber();
  };
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
