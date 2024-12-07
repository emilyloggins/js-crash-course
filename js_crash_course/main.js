import TaskItem from './models/TaskItem.js';

// Load tasks from Local Storage or initialize an empty array
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to save tasks to Local Storage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Function to add a task
const addTask = () => {
  console.log("run");
  const inputValue = document.getElementById("taskInput").value;
  let newTask = new TaskItem(inputValue, null);
  console.log(newTask, "new");
  if (inputValue.trim() === "") return; // Ignore empty input
  tasks.push(inputValue);
  saveTasks(); // Save updated tasks to Local Storage
  createTaskElement(inputValue);
  document.getElementById("taskInput").value = ""; // Clear input field
};

// Function to delete a task
const deleteTask = taskToDelete => {
  const index = tasks.indexOf(taskToDelete);
  if (index > -1) {
    tasks.splice(index, 1); // Remove the task from the array
    saveTasks(); // Save updated tasks to Local Storage
    renderTasks(); // Re-render the task list
  }
};

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#addButton");
  const deleteButton = document.querySelector("button");
  addButton.addEventListener("click", addTask);

  // Render tasks from Local Storage
  renderTasks();
});

const taskListElement = document.getElementById("taskList");

// Function to create a task element in the DOM
const createTaskElement = task => {
  const listItem = document.createElement("li");
  listItem.textContent = task;

  // Add a delete button to each task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => deleteTask(task));

  listItem.appendChild(deleteButton);
  taskListElement.appendChild(listItem);
};

// Function to render all tasks
const renderTasks = () => {
  taskListElement.innerHTML = ""; // Clear the current task list
  tasks.forEach(createTaskElement); // Re-create the task list
};
