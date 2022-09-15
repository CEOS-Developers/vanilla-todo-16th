const toDoForm = document.querySelector(".toDoForm");
const toDos = document.querySelector(".toDos");
const toDoInput= toDoForm.querySelector("input");

let toDoList = [];
let number = 0;

// toDoList 저장 함수 
function pushToDo(toDo){
    const toDoObj = {
        num : number +1,
        text: toDo,
    };
    number+=1;
    toDoList.push(toDoObj);
    console.log('push:',toDoList);
}

function delToDo(event){
    const button = event.target;
    const li = button.parentNode;
    toDos.removeChild(li);
    console.log(li.id)
    toDoList = toDoList.filter((toDo)=> toDo.num !== Number(li.id));
    console.log('del:',toDoList);
}

function addToDo(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");

    delButton.innerText="X";
    delButton.addEventListener("click",delToDo);

    span.innerHTML = toDo;
    li.appendChild(span);
    li.appendChild(delButton);
    li.id = number+1; //toDo list 관리 위해서 id 추가
    toDos.appendChild(li);
    pushToDo(toDo);
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
