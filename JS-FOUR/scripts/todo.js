// DECLARING VARIABLES

const taskInput = document.querySelector('#taskInput');
const dateInput = document.getElementById('dateInput');

const addTask = document.querySelector('.addTodo');
const clearList = document.querySelector('.clearList');

const myTaskList = document.querySelector('.myTaskList');

const todoList = [];

function addTodo(){
    const todo = taskInput.value;
    const dueDate = dateInput.value;
    todoList.push({todo, dueDate});    
    taskInput.value = '';
    dateInput.value = '';
}

/*
function renderTodo(){
    let renderedHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const taskObject = todoList[i];
        const {todo, dueDate} = taskObject;
        const html = `
        <p>
        ${i + 1}. ${todo} ${dueDate}
        <button>delete</button>
        <button>edit</button>
        </p>`;
        renderedHTML += html;
    }
    myTaskList.innerHTML = renderedHTML;
}
    */

function renderTodo2(){
    myTaskList.innerHTML = todoList.map((todoObject, index)=>{
        const {todo, dueDate} = todoObject;

      return `<p class="taskTextParag">
      <span class='taskText'>
        ${index + 1}. ${todo} ${dueDate}
      </span>

      <span class="taskBtns">
        <button class='edit' 
        onclick='
         editTodo()'>
         edit
         </button>
        <button class='delete' onclick="
        todoList.splice(${index}, 1);
        renderTodo2();
        ">delete</button>
      </span>
      </p>`
    }).join('')
}

// EDIT TODO

function editTodo(){
   
    for (let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {todo, dueDate} = todoObject;
        taskInput.value = todo;
        dateInput.value = dueDate;
    }
}


// ADD TASK EVENT
addTask.addEventListener('click', ()=>{
    addTodo();
    renderTodo2();
})


