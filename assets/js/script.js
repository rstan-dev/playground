// To Do app functionality

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todos');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = todoInput.value;

    if (todo) {
        todoText = todo.text
    };

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        };

        todoEl.innerText = todoText;

        todoList.appendChild(todoEl);

        todoInput.value = '';
    }
};