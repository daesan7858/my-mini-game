// 1. 점수를 저장할 변수 score 선언
let score = 0; //const score = 0;을 하면 변하지 않는 score가 됨

// 2. 현재 점수에 10점을 올리는 addTenPoints()함수 정의
function addTenPoints(){
	score = score + 10;
	console.log("현재 점수 : " + score);
}
// 3. 실제 addTenPoints()함수 두 번 실행
addTenPoints();
addTenPoints();

// index2.html에서 id=startButton의 태그를 찾아라.
const startButton = document.querySelector("#startButton");
const endButton = document.querySelector(".endButton");

// startButton을 누르면 자동으로 실행
// 이벤트핸들러 또는 이벤트처리함수
function startGame() {
	// 메시지 창을 화면에 띄움. 창을 닫아야 다음 작업가능
	// modal 대화창
	alert("게임 버튼을 눌렀어요 시작하죠")
}

//endButton이 눌리면 실행할 기능
function endGame(){
	// 간단하게 게임끝 출력
	alert("엔드 버튼을 클릭. 게임종료")
}


// 이벤트를 감시하는 감시대행 등록
// 모든 이벤트 감시는 X, 하나만 감시
// startButton이 마우스를 눌렀는지만, 누르면 startGame()자동실행
// 태그명.addEventListener("이벤트명", 이벤트핸들러명);
startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);

//------------------------------------------------------

const messageElement = document.querySelector("#message");

function changeGame() {
	alert("문자가 곧 바뀔 것이다")
	messageElement.textContent = "버튼을 눌렀구나 애송아";
}

changeButton.addEventListener("click", changeGame);
 
// ----------------------------------------------
 
const greeting = document.querySelector("#greeting");
const message2 = document.querySelector("#message2");
const copyButton = document.querySelector("#copyButton");

function copy() {
	message2.textContent = greeting.value;
	alert("따라할 말 : " + message2.textContent);
}

copyButton.addEventListener("click", copy);

// ----------------------------------------------------

let score2 = 0;
// 1. 요소찾기
// 2. 기능함수정의
// 3. 요소와 기능 연결 ---> 이벤트핸들러로 연결
const scoreElement = document.querySelector("#score2");
const clickButton = document.querySelector("#clickButton");
const resetButton = document.querySelector("#resetButton");
const message3Element = document.querySelector("#message3");

// clickButton을 누르면 score2가 1 증가
function addScore(){
	score2 = score2 + 1;
	scoreElement.textContent = score2;
	message3Element.textContent = "좋아요! 한 점을 얻었습니다.";
}

// resetButton을 누르면 score2 값 초기화
function resetGame() {
	score2 = 0;
	scoreElement.textContent = score2;
	message3Element.textContent = "점수가 초기화되었습니다.";
}

clickButton.addEventListener("click", addScore);
resetButton.addEventListener("click", resetGame);


