// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for new tasks
    const taskList = document.getElementById('task-list');     // Unordered list to display tasks

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content to the task text

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Button text
        removeButton.classList.add('remove-btn'); // Add class for styling

        // Remove task when the button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li element from the task list
        };

        // Append the remove button to the list item, then append the list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field for new entries
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when button is clicked

    // Allow tasks to be added by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the key pressed is "Enter"
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
