const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const subject = document.getElementById('subject').value;
  const topic = document.getElementById('topic').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  const task = { subject, topic, dueDate, priority };
  saveTask(task);
  displayTasks();
  form.reset();
});

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${task.subject}</strong> - ${task.topic} | Due: ${task.dueDate} | Priority: ${task.priority}`;
    taskList.appendChild(li);
  });
}

window.onload = displayTasks;
