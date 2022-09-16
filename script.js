const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const plusBtn = document.getElementById('plusBtn');
let todos = [0]; //업데이트 가능
let dones = [];

// 입력한 값 todos에 저장
function makeTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  // 시간으로 텍스트 구분
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  showTodo(newTodoObj);
  todos.push(newTodoObj);
}

todoForm.addEventListener('submit', makeTodo);
plusBtn.addEventListener('click', makeTodo);

// todos 화면에 출력
function showTodo(newTodo) {
  //li 안에 span 만들기 (창에 입력한 값이 span이 됨)
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  //클릭하면 To Do -> Done
  span.addEventListener('click', todoToggle);
  const delBtn = document.createElement('button');
  delBtn.innerText = '🗑';
  // 버튼 누르면 삭제 (deleteTodo 실행)
  delBtn.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoCount();
}

// Done 화면에 출력
function showDone(newTodo) {
  //li 안에 span 만들기 (창에 입력한 값이 span이 됨)
  const doneLi = document.createElement('li');
  doneLi.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  //클릭하면 Done -> To Do
  span.addEventListener('click', doneToggle);
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';
  // 버튼 누르면 삭제 (deleteDone 실행)
  //   delBtn.addEventListener('click', deleteDone);
  doneLi.appendChild(span); //부모: li, 자식: span
  doneLi.appendChild(delBtn); //부모: li, 자식: delBtn
  doneList.appendChild(doneLi);
  // doneCount();
}

// todos 삭제
function deleteTodo(event) {
  //버튼의 부모인 li 삭제
  const delLi = event.target.parentElement;
  delLi.remove();
  //toDo의 id(num)와 li의 id(string)가 다르면 삭제
  todos = todos.filter((toDo) => toDo.id !== parseInt(delLi.id));
  todoCount();
}

// To Do 항목 개수 세기
const todoCount = () => {
  const todoNum = document.getElementById('todoTitle');
  todoNum.innerText = `To Do (${todos.length})`;
};

// Done 항목 개수 세기
const doneCount = () => {
  const doneNum = document.getElementById('doneTitle');
  doneNum.innerText = `Done (${doneList.length})`;
};

// To Do -> Done
const todoToggle = (event) => {
  const mvTodoLi = event.target.parentElement;
  // 클릭시 스타일 바꾸기
  mvTodoLi.classList.toggle('finline');
  doneList.appendChild(mvTodoLi);
  dones.push(doneList);
};

// (미완) Done -> To Do
function doneToggle(event) {
  const mvDoneLi = event.target.parentElement;
  // 클릭시 스타일 바꾸기
  //mvDoneLi.classList.toggle('finline');
  todoList.appendChild(mvDoneLi);
  // doneCount();
}
