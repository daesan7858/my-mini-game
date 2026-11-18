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

// html객체와 이벤트(실제 마우스 누름 같은 click이라고함)
// 이벤트 연결등록 그러면 이벤트를 감시하다.
// 이벤트가 발생하면(예로 click이벤트) 실행할 함수 등록
helloButton.addEventListener("click", sayHello);





