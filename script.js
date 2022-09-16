const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const plusBtn = document.getElementById('plusBtn');
const todos = []; //업데이트 가능

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

function showDone() {
    //li 안에 span 만들기 (창에 입력한 값이 span이 됨)
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  //클릭하면 Done -> To Do
  span.addEventListener('click', doneToggle);
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';
  // 버튼 누르면 삭제 (deleteTodo 실행)
  delBtn.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  doneCount();
}

// todos 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  //toDo의 id(num)와 li의 id(string)가 다르면 삭제
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  todoCount();
}

// dones 삭제


// To Do 항목 개수 세기
const todoCount = () => {
  const todoNum = document.getElementById('todoTitle');
  // 해결 중 ... length가 0부터 출력됨
  todoNum.innerText = `To Do (${todos.length+1})`;
};

// Done 항목 개수 세기


// To Do -> Done
function todoToggle(event) {
  const li = event.target.parentElement;
  // 클릭시 스타일 바꾸기
  li.classList.toggle('finline');
  doneList.appendChild(li);
}

// Done -> To Do