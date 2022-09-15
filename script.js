const toDo = document.getElementById('toDoForm');
const toDoInput = document.getElementById('toDoInput');
const toDoList = document.getElementsByClassName('doing');

function Doing(saveToDo) {
  const content = document.createElement('li');
  content.innerText = saveToDo;
  toDoList[0].appendChild(content);
}

function onSubmit(event) {
  event.preventDefault();
  const saveToDo = toDoInput.value;
  toDoInput.value = '';
  Doing(saveToDo);
}

toDo.addEventListener('submit', onSubmit);
