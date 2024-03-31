function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var taskItem = createTaskElement(taskText);
    taskList.insertBefore(taskItem, taskList.firstChild);
    taskInput.value = "";

    saveTasksToLocalStorage();
  } else {
    alert("Please enter a task!");
  }
}

function createTaskElement(taskText) {
  var taskItem = document.createElement("li");

  var contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  var isDoneImg = document.createElement("img");
  contentWrapper.appendChild(isDoneImg);

  var textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  contentWrapper.appendChild(textSpan);

  taskItem.appendChild(contentWrapper);

  taskItem.classList.add("task-item");
  taskItem.addEventListener("click", toggleTask);

  var removeButton = createRemoveButton();
  taskItem.appendChild(removeButton);

  return taskItem;
}

function handleOnKeyDown(event) {
  if (event.key === "Enter") addTask();
}

function createRemoveButton() {
  var removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.classList.add("remove-button");
  removeButton.onclick = removeTask;
  return removeButton;
}

function toggleTask() {
  this.classList.toggle("task-completed");
  saveTasksToLocalStorage();
}

function removeTask(event) {
  event.stopPropagation();
  var taskToRemove = this.parentNode;
  taskToRemove.parentNode.removeChild(taskToRemove);

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = document.querySelectorAll(".task-item");
  const tasksArray = Array.from(tasks).map((task) => ({
    content: task.querySelector("span").textContent,
    isDone: task.classList.contains("task-completed"),
  }));

  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function loadTasksFromLocalStorage() {
  var tasksArray = JSON.parse(localStorage.getItem("tasks"));
  if (tasksArray) {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasksArray.forEach(function (task) {
      var taskItem = createTaskElement(task.content);
      if (task.isDone) taskItem.classList.add("task-completed");
      taskList.appendChild(taskItem);
    });
  }
}

function toggleDarkTheme() {
  const darkbtn = document.getElementById("darkbtn");
  const body = document.body;

  const isDarkTheme = localStorage.getItem("dark-theme") === "true";

  if (isDarkTheme) {
    body.classList.add("dark-theme");
    darkbtn.checked = true;
  }

  darkbtn.addEventListener("change", () => {
    if (darkbtn.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("dark-theme", "true");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("dark-theme", "disabled");
    }
  });
}

window.addEventListener("load", () => {
  loadTasksFromLocalStorage();
  toggleDarkTheme();
});
