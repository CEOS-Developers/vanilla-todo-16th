//필요한 전역변수 선언
const form = document.querySelector('form');
const text = document.querySelector('#to-do-list');
var input = document.getElementById('inputValue');
var list = document.getElementById('to-do-list');
var d_list = document.getElementById('done-list');
var ul = document.querySelector('ul');
const resultElement1 = document.getElementById('l_res');
let number = resultElement1.innerText;
const resultElement2 = document.getElementById('d_res');
let number2 = resultElement2.innerText; //여기까지 9월 13일 수정 내용
var btn = document.querySelector('button');
var moveToD_num = 0;
var moveToL_num = 0;

//끝난 일 섹션 코드
d_list.onclick = function (event) {
  console.log(event);

  //글씨 누르면 클래스 이름이 done으로 바뀌는 부분
  event.target.classList.toggle('done');

  //클래스 이름에 따라 끝난일로 갈지 할 일로 갈지 구분
  if (d_list.className !== 'done') {
    moveToL(event.target);
    //submit 버튼만 누르거나, 글자 취소선 유무에따라서만 끝난일/할일이 증가하게 코드를 짬
    if (event.target.tagName != 'BUTTON') {
      moveToD_num -= 1;
      moveToL_num += 1;
    } else {
      moveToD_num -= 1;
      moveToL_num += 0;
    }
  } else {
    moveToD(event.target);
    if (event.target.tagName != 'BUTTON') {
      moveToD_num += 1;
      moveToL_num -= 1;
    } else {
      moveToD_num += 0;
      moveToL_num -= 1;
    }
  }

  resultElement1.innerText = moveToL_num;
  resultElement2.innerText = moveToD_num;
};

//할 일 섹션 실행 코드
ul.onclick = function (event) {
  console.log(event.target.tagName);

  event.target.classList.toggle('done');

  const resultElement = document.getElementById('l_res');
  let number = resultElement.innerText;

  if (ul.className !== 'done') {
    moveToD(event.target);
    console.log(event.target.tagName);
    if (event.target.tagName != 'BUTTON') {
      moveToD_num += 1;
      moveToL_num -= 1;
    } else {
      moveToD_num += 0;
      moveToL_num -= 1;
    }
  } else {
    moveToL(event.target);
    if (event.target.tagName != 'BUTTON') {
      moveToD_num -= 1;
      moveToL_num += 1;
    } else {
      moveToD_num += 0;
      moveToL_num -= 1;
    }
  }

  resultElement1.innerText = moveToL_num;
  resultElement2.innerText = moveToD_num;
};

//글자 지우고 싶을때 삭제 버튼 누르면 실행되는 함수
function eraseText(event) {
  console.log(event.target);
  var target = event.target;
  target.removeEventListener('click', eraseText);
  target.parentNode.remove();
}

//눌렀을때 콘솔창에 맞는 것이 호출된지 보려고 선언한 함수
function btnClick(event) {
  console.log(event.target);
}
//눌렀을때 콘솔창에 맞는 것이 호출된지 보려고 선언한 함수
function onClickEvent(event) {
  console.log(event.target); //event.target은 해당 포인터가 누른것만 사용!
}

//할 일로 옮겨주는 함수
function moveToL(event) {
  console.log(event);
  if (event.tagName == 'LI') {
    list.appendChild(event);
  }
}
//끝난 일로 옮겨주는 함수
function moveToD(event) {
  console.log(event);
  if (event.tagName == 'LI') {
    d_list.appendChild(event);
  }
}
//처음에 입력창에 입력할때 리스트에 추가하기 위한 함수
function printText(event) {
  event.preventDefault(); //submit시 바로 리로딩 되는 것을 방지하기 위한 함수
  console.log('event');

  if (input.value == '') {
    //공백 입력 방지
    input.value = null;
  } else {
    //원래 기능
    const formData = new FormData(event.target);
    const val = formData.get('inputValue');
    var temp = document.createElement('li');
    var temp2 = document.createElement('button');

    temp.innerHTML = val;
    temp2.innerText = 'X'; //li태그의 button태그의 텍스트 내용 추가

    temp.appendChild(temp2);

    list.appendChild(temp);

    const resultElement = document.getElementById('l_res');
    let number = resultElement.innerText;
    moveToL_num += 1;
    resultElement1.innerText = moveToL_num;
    resultElement2.innerText = moveToD_num;

    console.log(list);
    input.value = null; //이것을 안해주면 이전입력값이 계속 남아있게 됨
    temp2.addEventListener('click', eraseText);
  }
}

//submit시나 click시 발생시킬 이벤트를 호출하기 위한 코드들이다.
form.addEventListener('submit', printText);
ul.addEventListener('click', onClickEvent);
d_list.addEventListener('click', onClickEvent);
