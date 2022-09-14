const todoForm = document.getElementById('todoForm');
const todoInput = document.querySelector('#todoForm input');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const plusBtn  = document.getElementById('plusBtn');
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

// todos 화면에 출력
function showTodo(newTodo) {
  //li 안에 span 만들기 (창에 입력한 값이 span이 됨)
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';
  // 버튼 누르면 삭제 (deleteTodo 실행)
  delBtn.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

todoForm.addEventListener('submit', makeTodo);
plusBtn.addEventListener('click',makeTodo);

// todos 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  //toDo의 id(num)와 li의 id(string)가 다르면 삭제
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
}
