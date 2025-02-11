/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #moveIndex;
  #tryCount;
  #inputUpDown;
  #upList;
  #downList;

  constructor () {
    this.#moveIndex = 0;
    this.#tryCount = 1;
    this.#upList = [];
    this.#downList = [];
  }

  setBridge (bridge) {
    this.#bridge = bridge;
  }

  getBridge () {
    return this.#bridge;
  }

  incrementMoveIndex () {
    this.#moveIndex += 1;
  }

  getMoveIndex () {
    return this.#moveIndex;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move (inputUpDown) {
    this.#inputUpDown = inputUpDown;
  }

  getInputUpDown () {
    return this.#inputUpDown;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry () {
    this.#tryCount += 1;
  }

  getTryCount () {
    return this.#tryCount;
  }

  setUpList (string) { 
    this.#upList.push(string);
  }

  setDownList (string) {
    this.#downList.push(string);
  }

  getUpList () {
    return this.#upList;
  }

  getDownList () {
    return this.#downList;
  }

  setList () {
    this.#moveIndex = 0;
    this.#upList = [];
    this.#downList = [];
  }
}

module.exports = BridgeGame;
