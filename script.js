// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for new tasks
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add each task to the list
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        const trimmedTaskText = taskText || taskInput.value.trim(); // Use provided taskText or input value

        // Check if the input is empty
        if (trimmedTaskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = trimmedTaskText; // Set the text content to the task text

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Button text
        removeButton.classList.add('remove-btn'); // Add class for styling

        // Remove task when the button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li element from the task list
            removeTaskFromStorage(trimmedTaskText); // Remove from Local Storage
        };

        // Append the remove button to the list item, then append the list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save the task to Local Storage if specified
        if (save) {
            saveTaskToStorage(trimmedTaskText);
        }

        // Clear the input field for new entries
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove the task
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask()); // Call addTask when button is clicked

    // Allow tasks to be added by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the key pressed is "Enter"
            addTask(); // Call addTask if Enter is pressed
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
