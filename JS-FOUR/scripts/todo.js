// DECLARING VARIABLES

const taskInput = document.querySelector('#taskInput');
const dateInput = document.getElementById('dateInput');

const addTask = document.querySelector('.addTodo');
const clearList = document.querySelector('.clearList');

const myTaskList = document.querySelector('.myTaskList');

const currentDate = Date.now();

// on load : call the totList (saved in localStorage)

const todoList = JSON.parse(localStorage.getItem('list')) || [];

function addTodo(){
    
    const todo = taskInput.value;
    const dueDate = dateInput.value;

    if (!taskInput.value)
        return

    todoList.push({todo, dueDate}); 

    todoList.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate)
    });

    taskInput.value = '';
    dateInput.value = '';

    localStorage.setItem('list', JSON.stringify(todoList));
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
         editTodo2(${index});
        '>
         edit
         </button>
        <button class='delete' onclick="
        todoList.splice(${index}, 1);
        renderTodo2();
        localStorage.setItem('list', JSON.stringify(todoList));
        ">delete</button>
      </span>
      </p>`
    }).join('')
}

// EDIT TODO FUNCTION

function editTodo2(i){
        
        const {todo, dueDate} = todoList[i];
        taskInput.value = todo;
        dateInput.value = dueDate;
        todoList.splice(i, 1);
        renderTodo2();

         localStorage.setItem('list', JSON.stringify(todoList))  
}


// ADD TASK EVENT
addTask.addEventListener('click', ()=>{
    addTodo();
    renderTodo2();
});

window.addEventListener('load', renderTodo2)


