function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);

  taskInput.value = "";
}
