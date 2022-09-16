let todoList = [];
let doneList = [];

const todoForm = document.querySelector('.to-do-form');
const inputText = document.querySelector('input');
const todos = document.querySelector('.to-do-list');
const Dones = document.querySelector('.done-list');
const closeButton = document.querySelector('.close-button');
const todoCountText = document.querySelector('.to-do-count');
const doneCountText = document.querySelector('.done-count');

const addTodoList = (e) => {
    e.preventDefault();
    const todoText = inputText.value;
    if (todoText) {
        createTodo(todoText);
    } else {
        window.alert('텍스트를 입력해 주세요.');
    }
};

const saveInTodoLocalStorage = (todoInfo) => {
    localStorage.setItem('todo-list', JSON.stringify(todoInfo));
};

const changeToDone = () => {};

const createTodo = (todoText) => {
    const todoId = new Date().getTime();
    const todoInfo = {
        todoId: todoId,
        todoText: todoText,
    };
    const todoContent = document.createElement('div');

    todoContent.className = `to-do-content-${todoId}`;
    todoContent.innerHTML = `
    <span>${todoText}</span> 
    <img 
        class="close-button-${todoId}" 
        onclick="onClickCloseButton(${todoId})" 
        src='../vanilla-todo-16th/close_button.svg'  
    />
    `;
    todos.appendChild(todoContent);
    todoList.push(todoInfo);
    saveInTodoLocalStorage(todoList);
    todoCount();

    inputText.value = '';
};

const onClickCloseButton = (todoId) => {
    let closeButton = document.querySelector(`.close-button-${todoId}`);
    if (closeButton.parentElement.className == `to-do-content-${todoId}`) {
        todoList = todoList.filter((todoInfo) => todoInfo.todoId !== todoId);
        closeButton.parentElement.remove();
    }
    todoCount();
};

const todoCount = () => {
    todoCountText.innerHTML = `<span> (${todoList.length})</span>`;
};

const doneCount = () => {
    doneCountText.innerHTML = `<span> (${doneList.length})</span>`;
};

const init = () => {
    todoForm.addEventListener('submit', addTodoList);
};
init();
