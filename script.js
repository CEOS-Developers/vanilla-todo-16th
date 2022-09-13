const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.enter-button');
const doingList = document.querySelector('.doing-list');
const doneList = document.querySelector('.done-list');

let doingID = 0;
let doneID = 0;

const deleteDoing = (e) => {
  const removeList = e.target.parentElement;
  removeList.remove();
  doingID--;
};

const deleteDone = (e) => {
  const removeList = e.target.parentElement;
  removeList.remove();
  doneID--;
};

const moveToDoing = (e) => {
  doingID++;
  const doingText = e.target.parentElement.children[0].textContent;

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const text = document.createElement('Text');
  text.classList.add('todo-text');
  text.innerText = doingText;
  todoInput.value = '';

  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.innerText = 'X';

  li.appendChild(text);
  li.appendChild(button);

  doingList.appendChild(li);

  button.addEventListener('click', deleteDone);
  text.addEventListener('click', moveToDone);

  deleteDoing(e);
};

const moveToDone = (e) => {
  doneID++;
  const doneText = e.target.parentElement.children[0].textContent;

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const text = document.createElement('Text');
  text.classList.add('todo-text');
  text.innerText = doneText;
  todoInput.value = '';

  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.innerText = 'X';

  li.appendChild(text);
  li.appendChild(button);

  doneList.appendChild(li);

  button.addEventListener('click', deleteDone);
  text.addEventListener('click', moveToDoing);

  deleteDoing(e);
};

const paintTodos = () => {
  doingID++;

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const text = document.createElement('Text');
  text.classList.add('todo-text');
  text.innerText = todoInput.value;
  todoInput.value = '';

  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.innerText = 'X';

  li.appendChild(text);
  li.appendChild(button);

  doingList.appendChild(li);

  button.addEventListener('click', deleteDoing);
  text.addEventListener('click', moveToDone);
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
