
// Initialize application
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        // Create a remove button for each todo
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            todoList.removeChild(li);
        };

        li.appendChild(removeButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

// Add event listener to the button
addButton.addEventListener('click', addTodo);

// Allow pressing Enter to add a todo
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
