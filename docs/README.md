## 🚀 기능 목록

1. 유저의 입력 데이터 유효성 검사
   - 1부터 9까지 서로 다른 3자리의 수를 입력 받는다. ✅
   - 위의 조건이 충족되지 않는 경우 `throw`문을 사용해 예외를 발생시켜 애플리케이션을 종료시킨다. ✅
     - 3자리의 수가 아닌 경우 ✅
     - 3자리의 숫자가 서로 다른 수가 아닌 경우 ✅
     - 숫자가 아닌 경우 ✅
2. 상대방인 컴퓨터가 선택한 랜덤의 수 3개 생성 ✅
3. 유저 입력에 대한 결과 출력

   - 같은 수가 같은 자리에 있으면 `스트라이크` 다른 자리에 있으면 `볼` 전혀 없으면 `낫싱`를 출력한다. ✅

4. 위의 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 맞추면 게임 종료
   - 1번 입력으로 게임 재시작 ✅
   - 2번 입력으로 게임 종료 ✅

## ✏️ 테스트 목록

1. 컴퓨터가 선택한 랜덤의 수 테스트
2. 유저 입력에 대한 결과 출력 테스트
3. 유저 입력에 대한 예외 처리 테스트
4. 게임 재시작, 종료 테스트
