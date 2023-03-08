const toDo = document.getElementById('toDoForm');
const toDoInput = document.getElementById('toDoInput');
const toDoList = document.getElementById('doing');
const doneList = document.getElementById('done');
//getElementsByClassName ==> 반환을 HTMLCollection으로, getElementById => 요소를 그대로 반환!!!
const doingText = document.getElementById('doingText');
const doneText = document.getElementById('doneText');

function checkToggle(event) {
  if (event.target.innerText == '✅') {
    const checkItem = event.target.parentElement;
    const toDoing = event.target;
    toDoing.innerText = '⬆️';
    doneList.appendChild(checkItem);
    doingText.innerText = `하는 중.... (${toDoList.childElementCount})`;
    doneText.innerText = `끝!!! (${doneList.childElementCount})`;
  } else {
    const returnItem = event.target.parentElement;
    const returnCheck = event.target;
    returnCheck.innerText = '✅';
    toDoList.appendChild(returnItem);
    doingText.innerText = `하는 중.... (${toDoList.childElementCount})`;
    doneText.innerText = `끝!!! (${doneList.childElementCount})`;
  }
}

// function returnToDo(event) {
//   const returnItem = event.target.parentElement;
//   const returnCheck = event.target;
//   returnCheck.innerText = '✅';
//   toDoList.appendChild(returnItem);
//   doingText.innerText = `Doing (${toDoList.childElementCount})`;
//   doneText.innerText = `Done (${doneList.childElementCount})`;

//   returnCheck.addEventListener('click', checkToggle);
// }

function deleteToDo(event) {
  const deleteItem = event.target.parentElement;
  deleteItem.remove();
  doingText.innerText = `하는 중.... (${toDoList.childElementCount})`;
  doneText.innerText = `끝!!! (${doneList.childElementCount})`;
}

// function checkToDo(event) {
//   const checkItem = event.target.parentElement;
//   const toDoing = event.target;
//   toDoing.innerText = '⬆️';
//   doneList.appendChild(checkItem);
//   doingText.innerText = `Doing (${toDoList.childElementCount})`;
//   doneText.innerText = `Done (${doneList.childElementCount})`;

//   toDoing.addEventListener('click', checkToggle);
// }

function Doing(saveToDo) {
  const content = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const checkBtn = document.createElement('button');

  checkBtn.innerText = '✅';
  deleteBtn.innerText = '❌';
  checkBtn.addEventListener('click', checkToggle);
  deleteBtn.addEventListener('click', deleteToDo);
  checkBtn.id = 'check';
  deleteBtn.id = 'delete';

  content.innerText = saveToDo;
  content.appendChild(checkBtn);
  content.appendChild(deleteBtn);
  toDoList.appendChild(content);
  doingText.innerText = `하는 중.... (${toDoList.childElementCount})`;
}

function onSubmit(event) {
  event.preventDefault();
  const saveToDo = toDoInput.value;
  if (saveToDo.trim()) {
    toDoInput.value = '';
    Doing(saveToDo);
  } else {
    alert('Check Content plz :)');
  }
}

toDo.addEventListener('submit', onSubmit);
