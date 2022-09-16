const toDoForm = document.querySelector(".toDoForm");
const toDos = document.querySelector(".toDos");
const toDoInput= toDoForm.querySelector("input");
const done = document.querySelector(".done");
const toDoLen = document.querySelector(".toDoLen");
const doneLen = document.querySelector(".doneLen");

let toDoList = [];
let doneList = [];

let todo_num=0;
let done_num=0;

// local storage에 있는 todolist, donelist 갖고오기
function getList(){
    const localToDoList = localStorage.getItem("toDoList");
    const localDoneList = localStorage.getItem("doneList");
    if(localToDoList !== null){
        const parse_toDoList = JSON.parse(localToDoList);
        for (let toDo of parse_toDoList){
            const {text} = toDo;
            addToDo(text);
        }
    }
    if(localDoneList !== null){
        const parse_doneList = JSON.parse(localDoneList);
        for(let done of parse_doneList){
            const {text} = done;
            addDone(text);
        }
    }
}

// todolist, donelist 길이 반영
function calLen(){
    toDoLen.innerHTML = toDoList.length;
    doneLen.innerHTML = doneList.length;
}

// todolist, donelist 저장함수
function addFunc(text,id,type){
    const addObj = {
        num : id,
        text : text,
        type : type
    }
    if(type=="todo"){
        toDoList.push(addObj);
        todo_num+=1;
        localStorage.setItem("toDoList",JSON.stringify(toDoList));
    }else{
        doneList.push(addObj);
        done_num+=1;
        localStorage.setItem("doneList",JSON.stringify(doneList));
    }
}

// todolist에서 삭제
function delToDo(event){
    const button = event.target;
    const li = button.parentNode;
    toDos.removeChild(li);
    toDoList = toDoList.filter((toDo)=> toDo.num !== Number(li.id));
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
    calLen();
}

// donelist에서 삭제
function delDone(event){
    const span = event.target;
    const li = span.parentNode;
    done.removeChild(li);
    doneList = doneList.filter((done)=>done.num !== Number(li.id));
    localStorage.setItem("doneList",JSON.stringify(doneList));
    calLen();
}

// done에 추가
function addDone(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");

    delButton.innerText="✖"
    delButton.style.color = 'red';
    delButton.style.backgroundColor = 'white';
    delButton.style.border = 0;
    delButton.addEventListener("click",delDone);

    span.innerHTML = text;
    span.style.textDecorationLine = "line-through";
    span.addEventListener("click",changeDone);

    li.appendChild(span);
    li.appendChild(delButton);
    li.id = done_num;
    done.appendChild(li);
    addFunc(text,done_num,"done");
    calLen();
}

// todo -> done
function changeToDo(event){
    const span = event.target;
    const li = span.parentNode;
    delToDo(event);
    addDone(span.innerHTML);
    calLen();
}

// done -> todo
function changeDone(event){
    const span = event.target;
    const li = span.parentNode;
    delDone(event);
    addToDo(span.innerHTML);
    calLen();
}

// todo에 추가
function addToDo(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");

    delButton.innerText="✖"
    delButton.style.color = 'red';
    delButton.style.backgroundColor = 'white';
    delButton.style.border = 0;
    delButton.addEventListener("click",delToDo);

    span.innerHTML = toDo;
    span.addEventListener("click",changeToDo);

    li.appendChild(span);
    li.appendChild(delButton);
    li.id = todo_num; // list 관리 위해서 id 추가
    toDos.appendChild(li);
    addFunc(toDo,todo_num,"todo");

    calLen();
}

function createToDo(event){
    event.preventDefault(); // 새로고침 막음
    const toDo = toDoInput.value;
    addToDo(toDo);
    toDoInput.value="";
}

// submit event 들어오면 createToDo 함수 실행
function init(){
    getList();
    toDoForm.addEventListener("submit",createToDo);
}

init();
