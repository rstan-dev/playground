// P1: To Do app functionality

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => addTodo(todo));
};

const doneButton = document.getElementsByClassName('done');

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

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
            updateLS();

        });

        // doneButton.addEventListener('click', => todoEl.classList.toggle('completed'));

        todoList.appendChild(todoEl);

        todoInput.value = '';

        updateLS();
    }
};

function updateLS() {
    todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    })

    localStorage.setItem('todos', JSON.stringify(todos));
};

//-----------------------------------------------------
// P2: Draggable List functionality
const draggable_list = document.getElementById('draggable-list');

const richestpeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffet',
    'Mark Zuckerberg',
    'Larry Page',
    'Michael Bloomberg',
];

// P2: Store listItems
const listItems = [];

let dragStartIndex;

createList();

//P2: Insert list items into DOM
function createList() {
    [...richestPeople]
    .forEach((person, index) => {
        const listItem =
    })
}