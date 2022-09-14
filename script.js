//오늘 날짜
const week=['월','화','수','목','금','토','일']
let nowDate =new Date().getFullYear()+'년 '+(new Date().getMonth()+1)+'월 '+new Date().getDate()+'일 '+week[new Date().getDay()-1]+'요일';
document.getElementsByClassName('today')[0].innerHTML=now;

let todoNum=0,index=0,doneNum=0;
//할 일 추가
function getValueInput(){
    var inputValue = document.getElementById('inputValue');
    document.querySelector(`.container`).insertAdjacentHTML('beforeend',` 
    <div id="task-container" class="task-container-${++index}">
        <img src="./img/circle.png" class="image_todo" onclick="done(${index})" /> 
        <div id="todo-task" class="todo-task-${index}">${inputValue.value}</div> 
        <img src="./img/delete.png" class="image" onclick="todo_delete(${index})" /> 
    </div>`); 
    inputValue.value='';

    //남은 할 일 개수 표시
    todoNum=document.getElementsByClassName('image_todo').length;
    document.getElementsByClassName('todo-title')[0].innerHTML='남은 할 일 '+todoNum+'개';
}
document.getElementsByClassName('todo-title')[0].innerHTML='남은 할 일 '+0+'개';
