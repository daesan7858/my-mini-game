/* 함수 정의
 function 함수면(입력 매개변수) {
 	   입력매게변수를 사용한 처리문...
}
*/

// 이벤트를 만드는 태그
// 1. html 태그를 자바스크립트에서 쓰려면
// 2. html 태그를 찾는 querySelector("셀렉터이름")
// 3. 모든 html 태그는 Document Object Model이라는
//	  자바스크립트에 들어있다.
// 4. document객체를 DOM이라 약자로 부름

const helloButton = document.querySelector("#helloButton");

// 내가 만든 처리 함수 이벤트가 발생하면 실행될 함수
function sayHello() {
	alert("안녕하세요");
}

// toList 제어하기
// 1. 추가 버튼 찾기
const addButton = 
	document.querySelector("#addButton");

// 2. #addButton 요소를 눌렀는가
addButton.addEventListener("click", function(){
	
	// 3. 입력창에서 글자 가져오기
	const input = document.querySelector("#taskInput");
	// alert("입력내용 : " + input.value);
	
	// 3.5 입력창에 값이 비었으면 li추가 취소
	if(input.value.trim() ==="") {
		alert("글자를 적고 버튼을 누르시오");
		return;
	}
	
	// 4. ul에 추가할 내용을 등록하기 위해
	//	  li태그 필요. 자바스크립트로 새로 만들어야 함
	const item = document.createElement("li");

	// 5. li item에 input값을 저장
	item.textContent = input.value;
	
	// 6. dom으로 "#taskList" ul요소를 찾기
	const taskList = document.querySelector("#taskList");
	taskList.append(item);
	
	// 6.5 할 일 완료표시 넣기(취소선 넣기)
	// 아이템 리스트를 마우스로 클릭하는 경우
	item.addEventListener("click", function() {
		item.style.textDecoration = "line-through";
	});
	
	// 7. 새로 li에 값이 추가되고 나면
	// input 태그 값 초기화
	input.value = "";
});

// loadStorage를 이용한 행운뽑기
// 1. 포춘종류 배열을 만든다.
const fortunes = [
	"오늘은 행운이 가득해! 😁",
	"멋진 일이 생길 거야! 🌹", 
	"오늘은 맛있는 걸 먹자! 🍰", 
	"새로운 도전을 시작해 봐! 🚀",
	"너는 충분히 잘하고 있어! ❤"
];

// 2. 선택된 포춘을 저장하는 포춘변수를 초기화
let currentFortune = "";

// 3. 실제 포춘을 뽑는 함수 	  drawFortune() 정의 
function drawFortune(){
	// 1. 포춘배열에서 난수로 인덱스 번호를 가져온다.
	// 2. 난수 만들기 -> 임의의 정수 생성
	// Math.floor(숫자의 범위) : 수학라이브러리,
	// 	  주어진 범위에서 가장 작은 정수를 뽑는 함수
	// 숫자의 범위는 '난수를 발생킨 값 * 배열의 갯수'
	// 0 <= 난수 <= 배열의 갯수 사이의 실수
	// floor(3.5) : 3을 리턴
	// Math.random() : 0.0 <= 난수 < 1.0 의 실수
	const index =  Math.floor(
		Math.random() * fortunes.length
	);
	// 현재 랜덤 행운 뽑기
	currentFortune = fortunes[index];
	// 현재 운세의 내용을 result 태그에 출력
	document.querySelector("#result").textContent =
		currentFortune;
	
} 

// 4. 포춘을 저장하는 함수 		  saveFortune() 정의 
function saveFortune(){
	// 1. currentFortune 값이 있는가 조사
	// 		없으면 실행취소
	if(currentFortune === "") {
		alert("먼저 행운을 뽑아주세요.");
		return;
	}
	
	// 2. localStorage 웹브라우저 저장소에
	// 		영구저장 localStorage.setItem 사용
	localStorage.setItem(
		"myFortune", currentFortune
	);
	alert("행운을 저장했습니다");
}

// 5. 저장된 포춘을 불러오는 함수 loadFortune() 정의 
function loadFortune(){
	// 1. 로컬스토리지에서 값을 가져온다.
	// 		localStorage.getItem("키변수")
	const saved = localStorage.getItem("myFortune");
	// 2. 읽어온 값이 비었으면 "저장 행운 없음" 출력
	if(saved === null) {
		alert("저장된 행운 없음");
		return;
	}
	// 3. 읽어온 값이 있으면 #result 태그에
	// 		읽어온 값 출력
	currentFortune = saved;
	
	document
		.querySelector("#result")
		.textContent = currentFortune;
} 

// 6. 저장된 포춘을 삭제하는 함수 deleteFortune() 정의
function deleteFortune(){
	// 1. 로컷스토리지 삭제
	// localStorage.removeItem("myFortune")
	localStorage.removeItem("myFortune");
	
	// 2. currentFortune 변수도 삭제
	currentFortune = "";
	
	// 3. result html 태그 삭제
	document.querySelector("#result").textContent
		 = "저장된 행운을 삭제했습니다";
		 
	// 4. 삭제 완료 알림
	alert("삭제 완료");
} 





// html객체와 이벤트(실제 마우스 누름 같은 click이라고함)
// 이벤트 연결등록 그러면 이벤트를 감시하다.
// 이벤트가 발생하면(예로 click이벤트) 실행할 함수 등록
helloButton.addEventListener("click", sayHello);


// index2.html 의 js
const resetButton = 
	document.querySelector("#resetButton");

function resetButton_click() {
	alert("리셋되었습니다.");
}

// resetButton 태그와 resetButton_click 을 연결해주는 걸
// 이벤트 핸들러라고 한다
resetButton.addEventListener("click", resetButton_click);
