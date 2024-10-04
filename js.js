document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});


function addTask(task) {
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = task;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
