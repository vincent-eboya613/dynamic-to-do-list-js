// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Remove task when button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the button to the list item, then append the list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clearing the input field
        taskInput.value = '';
    }

    // adding the task button
    addButton.addEventListener('click', addTask);

    //pressing the Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
