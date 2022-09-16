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

d_list.onclick = function (event) {
  console.log(event);

  event.target.classList.toggle('done');

  if (d_list.className !== 'done') {
    moveToL(event.target);
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

function eraseText(event) {
  console.log(event.target);
  var target = event.target;
  target.removeEventListener('click', eraseText);
  target.parentNode.remove();
}

function btnClick(event) {
  console.log(event.target);
}

function onClickEvent(event) {
  console.log(event.target); //event.target은 해당 포인터가 누른것만 사용!
}

function moveToL(event) {
  console.log(event);
  if (event.tagName == 'LI') {
    list.appendChild(event);
  }
}

function moveToD(event) {
  console.log(event);
  if (event.tagName == 'LI') {
    d_list.appendChild(event);
  }
}

/*function remToDo (event){

}



function moveToD (event){
    console.log(text);
    const val = text.innerText;
    var temp = document.createElement('li');
    temp.innerHTML=val;
    //temp.innerHTML=`<li id='in'>${val}</li>`;
    d_list.appendChild(temp);
    console.log(d_list);
}
*/

function printText(event) {
  event.preventDefault();
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
    temp2.innerText = 'X';

    temp.appendChild(temp2);

    list.appendChild(temp);

    const resultElement = document.getElementById('l_res');
    let number = resultElement.innerText;
    moveToL_num += 1;
    resultElement1.innerText = moveToL_num;
    resultElement2.innerText = moveToD_num;

    console.log(list);
    input.value = null; //나의 구세주
    temp2.addEventListener('click', eraseText);
  }
}

form.addEventListener('submit', printText);
ul.addEventListener('click', onClickEvent);
d_list.addEventListener('click', onClickEvent);
