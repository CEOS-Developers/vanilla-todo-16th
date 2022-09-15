const toDoForm = document.querySelector(".toDoForm");
const toDos = document.querySelector(".toDos");
const toDoInput= toDoForm.querySelector("input");
const done = document.querySelector(".done");
const toDoLen = document.querySelector(".toDoLen");
const doneLen = document.querySelector(".doneLen");

let toDoList = [];
let doneList = [];

// todolist, donelist 길이 반영
function calLen(){
    toDoLen.innerHTML = toDoList.length;
    doneLen.innerHTML = doneList.length;
}

// todo, done 저장함수
function addFunc(text,id,type){
    const addObj = {
        num : id,
        text : text,
        type : type
    }
    if(type=="todo"){
        toDoList.push(addObj);
    }else{
        doneList.push(addObj);
    }
    console.log('todolist:',toDoList);
    console.log('donelist:',doneList);
}


// todolist에서 삭제
function delToDo(event){
    const button = event.target;
    const li = button.parentNode;
    toDos.removeChild(li);
    toDoList = toDoList.filter((toDo)=> toDo.num !== Number(li.id));
    console.log('del:',toDoList);
    calLen();
}

// donelist에서 삭제
function delDone(event){
    const span = event.target;
    const li = span.parentNode;
    done.removeChild(li);
    doneList = doneList.filter((done)=>done.num !== Number(li.id));
    calLen();
}

// done에 추가
function addDone(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");

    delButton.innerText="X"
    delButton.addEventListener("click",delDone);

    span.innerHTML = text;
    span.addEventListener("click",changeDone);

    li.appendChild(span);
    li.appendChild(delButton);
    li.id = doneList.length +1;
    done.appendChild(li);
    addFunc(text,doneList.length +1,"done");
    calLen();
}

// todo -> done
function changeToDo(event){
    const span = event.target;
    const li = span.parentNode;
    console.log('changeToDo:',span.innerHTML);
    delToDo(event);
    addDone(span.innerHTML);
    calLen();
}

// done -> todo
function changeDone(event){
    const span = event.target;
    const li = span.parentNode;
    console.log('changeDone:',span.innerHTML);
    delDone(event);
    addToDo(span.innerHTML);
    calLen();
}

// todo에 추가
function addToDo(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");

    delButton.innerText="X";
    delButton.addEventListener("click",delToDo);

    span.innerHTML = toDo;
    span.addEventListener("click",changeToDo);

    li.appendChild(span);
    li.appendChild(delButton);
    li.id = toDoList.length +1; // list 관리 위해서 id 추가
    toDos.appendChild(li);
    addFunc(toDo,toDoList.length +1,"todo");

    calLen();
}

function createToDo(event){
    event.preventDefault(); // 새로고침 막음
    const toDo = toDoInput.value;
    addToDo(toDo);
    toDoInput.value="";
}

function init(){
    toDoForm.addEventListener("submit",createToDo);
}

init();
