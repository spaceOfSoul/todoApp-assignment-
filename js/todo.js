const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");

const tdDoList = document.querySelector(".todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintTodo(newTodo){//
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    const check = document.createElement("input");

    span.innerText = newTodo.text;

    button.innerText = "X";
    button.addEventListener("click",DeleteToDo);

    check.type = "checkbox";
    check.addEventListener("click", checkIdo);

    li.append(check);
    li.appendChild(span);
    li.appendChild(button);
    tdDoList.appendChild(li);
}


function DeleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => item.id != li.id);
    saveTodo();
    li.remove();
}

function checkIdo(event){
    const span = event.target.parentElement.querySelector("span");
    span.classList.toggle("jul");
}

function hadleToDoSubmit(event){
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}
toDoForm.addEventListener("submit", hadleToDoSubmit);

//저장내용 로드
const SavedTodos = localStorage.getItem(TODOS_KEY);

if(SavedTodos !== null){
    const parsedToDos = JSON.parse(SavedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}