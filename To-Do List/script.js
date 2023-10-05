// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(taskList);
});

// Add a new task
document.getElementById("addTask").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        taskInput.value = "";
        renderTasks(taskList);
    }
});

// Render tasks to the UI
function renderTasks(taskList) {
    const taskListUI = document.getElementById("taskList");
    taskListUI.innerHTML = "";

    taskList.forEach((taskText, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListUI.appendChild(listItem);
    });
}

// Delete a task
function deleteTask(index) {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTasks(taskList);
}
