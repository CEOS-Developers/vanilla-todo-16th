const toDo = document.getElementById('toDoForm');
const toDoInput = document.getElementById('toDoInput');

toDo.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const saveToDo = toDoInput.value;
  toDoInput.value = '';
}
