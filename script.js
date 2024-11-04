

const inputField = document.querySelector(".input");
const addButton = document.querySelector(".add");
const taskList = document.querySelector(".list");

function addTask() {
  const taskText = inputField.value.trim();
  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = taskText;
  listItem.classList.add("task-item");

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("list-cont");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editTask(listItem));

  taskContainer.appendChild(listItem);
  taskContainer.appendChild(deleteButton);
  taskContainer.appendChild(editButton);
  taskList.appendChild(taskContainer);

  inputField.value = "";
}

function deleteTask(event) {
  console.log(event.target.parentElement);
  const taskContainer = event.target.parentElement;
  taskList.removeChild(taskContainer);
}

function editTask(taskItem) {
  console.log(taskItem)
  console.log(taskItem.textContent)
  const originalText = taskItem.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = originalText;
  input.classList.add("edit-input");

  taskItem.textContent = "";
  taskItem.appendChild(input);

  function saveTask() {
    const newText = input.value.trim();
    if (newText) {
      taskItem.textContent = newText;
    } else {
      taskItem.textContent = originalText;
    }
  }

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      saveTask();
    }
  });
}

function toggleTaskCompletion(event) {
  event.target.classList.toggle("checked");
}

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    toggleTaskCompletion(event);
  }
});
