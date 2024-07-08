const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('task');
    const timestamp = new Date().toLocaleString();
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <div>
            <span class="timestamp">Added: ${timestamp}</span>
            <button class="complete-btn">Complete</button>
        </div>
    `;

    const completeButton = todoItem.querySelector('.complete-btn');
    completeButton.addEventListener('click', function() {
        completeTask(todoItem);
    });

    todoList.appendChild(todoItem);
}

function completeTask(taskItem) {
    const timestamp = new Date().toLocaleString();
    const taskText = taskItem.querySelector('span').innerText;

    const completedItem = document.createElement('li');
    completedItem.classList.add('task', 'completed');
    completedItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <span class="timestamp">Completed: ${timestamp}</span>
        </div>
    `;

    completedList.appendChild(completedItem);
    taskItem.remove();
}
