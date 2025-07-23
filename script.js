document.addEventListener('DOMContentLoaded', function () {
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
      taskList.appendChild(li);

      const deleteBtn = li.querySelector('.delete-btn');
      const checkbox = li.querySelector('.task-checkbox');

      deleteBtn.addEventListener('click', function () {
        li.remove();
      });

      checkbox.addEventListener('change', function () {
        li.classList.toggle('completed');
      });

      taskInput.value = ""; // Clear input
    }
  });
});
