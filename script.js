function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const taskItem = document.createElement('div');
      taskItem.className = 'alert alert-info fade-in';
      taskItem.textContent = taskInput.value;
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'close';
      deleteButton.innerHTML = '&times;';
      deleteButton.addEventListener('click', function () {
        taskItem.classList.remove('fade-in');
        taskItem.classList.add('fade-out');
        setTimeout(function () {
          taskItem.remove();
        }, 500); // 500ms is the duration of the fade-out animation
      });
  
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  }
