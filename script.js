const toDo = document.getElementById('toDoForm');
const toDoInput = document.getElementById('toDoInput');
const toDoList = document.getElementById('doing');
//getElementsByClassName ==> 반환을 HTMLCollection으로, getElementById => 요소를 그대로 반환!!!

function deleteToDo(event) {
  const deleteItem = event.target.parentElement;
  deleteItem.remove();
}

function Doing(saveToDo) {
  const content = document.createElement('li');
  const btn = document.createElement('button');
  btn.innerText = 'X';
  btn.addEventListener('click', deleteToDo);
  content.innerText = saveToDo;
  content.appendChild(btn);
  toDoList.appendChild(content);
}

function onSubmit(event) {
  event.preventDefault();
  const saveToDo = toDoInput.value;
  toDoInput.value = '';
  Doing(saveToDo);
}

toDo.addEventListener('submit', onSubmit);
