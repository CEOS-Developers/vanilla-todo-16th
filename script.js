const toDo = document.getElementById('toDoForm');
const toDoInput = document.getElementById('toDoInput');
const toDoList = document.getElementById('doing');
const doneList = document.getElementById('done');
//getElementsByClassName ==> 반환을 HTMLCollection으로, getElementById => 요소를 그대로 반환!!!
const doingText = document.getElementById('doingText');
const doneText = document.getElementById('doneText');

function deleteToDo(event) {
  const deleteItem = event.target.parentElement;
  deleteItem.remove();
  doingText.innerText = `Doing (${toDoList.childElementCount})`;
  doneText.innerText = `Done (${doneList.childElementCount})`;
}

function checkToDo(event) {
  const checkItem = event.target.parentElement;
  event.target.remove();
  doneList.appendChild(checkItem);
  doingText.innerText = `Doing (${toDoList.childElementCount})`;
  doneText.innerText = `Done (${doneList.childElementCount})`;
}

function Doing(saveToDo) {
  const content = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const checkBtn = document.createElement('button', (id = 'check'));

  checkBtn.innerText = '✅';
  deleteBtn.innerText = '❌';

  checkBtn.addEventListener('click', checkToDo);
  deleteBtn.addEventListener('click', deleteToDo);
  content.innerText = saveToDo;
  content.appendChild(checkBtn);
  content.appendChild(deleteBtn);
  toDoList.appendChild(content);
  doingText.innerText = `Doing (${toDoList.childElementCount})`;
}

function onSubmit(event) {
  event.preventDefault();
  const saveToDo = toDoInput.value;
  toDoInput.value = '';
  Doing(saveToDo);
}

toDo.addEventListener('submit', onSubmit);
