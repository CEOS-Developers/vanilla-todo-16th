const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.enter-button');
const todoList = document.querySelector('.doing-list');

let id = 0;

const deleteTodo = (e) => {
  const removeList = e.target.parentElement;
  removeList.remove();
};

const paintTodos = () => {
  id++;

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const text = document.createElement('Text');
  text.classList.add('todo-text');
  text.innerText = `${id} : ${todoInput.value}`;
  todoInput.value = '';

  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.innerText = 'X';

  li.appendChild(text);
  li.appendChild(button);

  todoList.appendChild(li);

  button.addEventListener('click', deleteTodo);
};

function handleToDoSubmit(e) {
  e.preventDefault();
  paintTodos();
}

const init = () => {
  todoForm.addEventListener('submit', handleToDoSubmit);
  todoBtn.addEventListener('click', handleToDoSubmit);
};

init();
