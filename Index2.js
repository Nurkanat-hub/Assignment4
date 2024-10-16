document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    
    if (taskInput === '') {
        alert("You must type something!");
        return;
    }

    let li = document.createElement('li');
    let taskText = document.createTextNode(taskInput);

    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = 'Complete';
    completeBtn.className = 'mark-complete';
    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
}
