//오늘 날짜
const week=['월','화','수','목','금','토','일']
let nowDate =new Date().getFullYear()+'년 '+(new Date().getMonth()+1)+'월 '+new Date().getDate()+'일 '+week[new Date().getDay()-1]+'요일';
document.getElementsByClassName('today')[0].innerHTML=nowDate;

let todoNum=0,index=0,doneNum=0;
//할 일 추가 (클래스 네임을 변수로 다르게 설정하여 추가/삭제 기능)
function getValueInput(){
    var inputValue = document.getElementById('inputValue'); 
    document.querySelector(`.container`).insertAdjacentHTML('beforeend',` 
    <div id="task-container" class="task-container-${++index}"> 
        <img src="./img/circle.png" class="image_todo" onclick="done(${index})" />  
        <div id="todo-task" class="todo-task-${index}">${inputValue.value}</div> 
        <img src="./img/delete.png" class="image" onclick="todo_delete(${index})" /> 
    </div>`); 
    console.log(index);
    inputValue.value='';

    //남은 할 일 개수 표시
    todoNum=document.getElementsByClassName('image_todo').length;
    document.getElementsByClassName('todo-title')[0].innerHTML='남은 할 일 '+todoNum+'개';
}
document.getElementsByClassName('todo-title')[0].innerHTML='남은 할 일 '+0+'개';


//완료
function done(i){

    //완료 목록에 추가
    var value=document.getElementsByClassName("todo-task-"+i)[0].innerHTML;
    document.querySelector(`.done-container`).insertAdjacentHTML('beforeend',` 
    <div id="done-task-container" class="done-task-container-${i}">
        <img src="./img/checkmark.png" class="image_done" onclick="doneDelete(${i})" /> 
        <div id="done-task" class="done-task-${i}">${value}</div> 
        <img src="./img/delete.png" class="image" onclick="done_delete(${i})" /> 
    </div>`); 
    console.log(i);

    //할 일에서 삭제
    todo_delete(i);

    //완료 개수 표시
    doneNum=document.getElementsByClassName('image_done').length;
    document.getElementsByClassName('done-title')[0].innerHTML='완료한 일 '+doneNum+'개';
}
document.getElementsByClassName('done-title')[0].innerHTML='완료한 일 '+0+'개';


//완료 목록에서 삭제 & 남은 할 일 추가
function doneDelete(i){

    //남은 할 일 추가
    var value=document.getElementsByClassName("done-task-"+i)[0].innerHTML;
    document.querySelector(`.container`).insertAdjacentHTML('beforeend',` 
    <div id="task-container" class="task-container-${i}">
        <img src="./img/circle.png" class="image_todo" onclick="done(${i})" /> 
        <div id="todo-task" class="todo-task-${i}">${value}</div> 
        <img src="./img/delete.png" class="image" onclick="todo_delete(${i})" /> 
    </div>`); 

    //남은 할 일 개수 표시
    todoNum=document.getElementsByClassName('image_todo').length;
    document.getElementsByClassName('todo-title')[0].innerHTML='남은 할 일 '+todoNum+'개';

    //완료 목록에서 삭제
    done_delete(i);
}

//할 일에서 삭제
function todo_delete(i){
    var removeClass=document.getElementsByClassName("task-container-"+i)[0];
    removeClass.remove();
    --todoNum;
    document.getElementsByClassName('todo-title')[0].innerHTML='남은 할 일 '+todoNum+'개';
}

//완료목록에서 삭제
function done_delete(i){
    var removeClass=document.getElementsByClassName("done-task-container-"+i)[0];
    removeClass.remove();
    --doneNum;
    document.getElementsByClassName('done-title')[0].innerHTML='완료한 일 '+doneNum+'개';
}