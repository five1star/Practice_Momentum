const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
const toDos= []; 
console.log(toDos);

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length+1;
    
    delBtn.textContent = '지우기';
    span.textContent = text;

    li.append(span,delBtn);
    li.id = newId;
    toDoList.append(li);
    
    const toDosObj = {
        text:text,
        id:newId,
    };
    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue  = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';

}

function something(toDo){
    paintToDo(toDo.text);
}



function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);

    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit);
}

init()