// DECLARING VARIABLES

const taskInput = document.querySelector('#taskInput');
const dateInput = document.getElementById('dateInput');

const addTask = document.querySelector('.addTodo');
const clearList = document.querySelector('.clearList');

const myTaskList = document.querySelector('.myTaskList');
const todoTotal = document.querySelector('.taskNumber');

// todoList set on load

const todoList = JSON.parse(localStorage.getItem('list')) || [];

function addTodo(){

    const task = taskInput.value;
    const date = dateInput.value;

    if(task && date) {

        todoList.push({task, date});
        updateTaskHeader();
        taskInput.value = '';
        dateInput.value = ''

    }else if(!task){

        alert('Please add a task to accomplish !');
        return;

    }else if(!date){

        if(confirm('Are not you willing to add a due date ?')){
            todoList.push({task, date});
            taskInput.value = '';
            dateInput.value = '';
            updateTaskHeader()
        }
        }

    // task total
     todoTotal.innerHTML = todoList.length;

    localStorage.setItem('list', JSON.stringify(todoList))
}

 // sort todos

        todoList.sort((a, b)=>{
            if (!a.date && !b.date) return 0;
            if(!a.date) return -1;
            if(!b.date) return 1;

            return new Date(a.date) - new Date(b.date);
        })

// RENDER TODO

function renderTodo(){
    myTaskList.innerHTML = todoList.map((todo, index)=>{
        const {task, date} = todo;
        return `<p>${index + 1}. ${task} ${date} 
        <button onclick='editTodo(${index})'>Edit</button> 
        <button onclick="deleteTodo(${index})">delete</button> . </p>`
    }).join('')
}

// clear todo

function clearTodo(){
    const listLength = todoList.length;
    todoList.splice(0, listLength);
    updateUI();
}

// CLEAR TODO TASKS ALL

clearList.addEventListener('click', clearTodo);

document.querySelector('.addTodo').addEventListener('click', ()=>{
    addTodo();
    renderTodo()
});

// function edit

function editTodo(i){
    const {task, date} = todoList[i];
    taskInput.value = task;
    dateInput.value = date;
    todoList.splice(i, 1);
    todoTotal.innerHTML = todoList.length;
    updateUI();  
}

// function delete

function deleteTodo(index){
    todoList.splice(index, 1);
    updateUI();
    todoTotal.innerHTML = todoList.length;
}

// function tasks heading

const h2Todo = document.querySelector('.todoHead');

function updateTaskHeader(){
    let numberList = todoList.length;
    if (!todoList.length){
        h2Todo.innerHTML = 'No Task to Accomplish ! Add Some'
    } else {
        h2Todo.innerHTML = `Your Todo List ${numberList}`
    }
}
updateUI();

// UPDATE UI
function updateUI(){
    renderTodo();
    updateTaskHeader();
    localStorage.setItem('list', JSON.stringify(todoList)); 
}

window.addEventListener('load', ()=>{
    todoTotal.innerHTML = todoList.length;
    updateUI();
})


 