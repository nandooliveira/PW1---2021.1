let taskListDiv = document.querySelector('#task-list');

function fetchTasksList() {
    fetch('http://localhost:3000/tasks.json', { method: 'GET' })
        .then(response => response.json())
        .then(tasks => {
            let template = document.querySelector('#task-template');

            tasks.forEach(task => {
                let clone = template.content.cloneNode(true);
                let taskTitle = clone.querySelector('.task-title');
                taskTitle.textContent = task.title;

                let taskDescription = clone.querySelector('.task-description');
                taskDescription.textContent = task.description;

                if (task.status == 'completed') {
                    let taskStatus = clone.querySelector('.task-status');
                    taskStatus.checked = true;
                }

                let deleteButton = clone.querySelector('#task-delete');

                taskListDiv.appendChild(clone);
            });
        });
}

function deleteTask(id) {
    fetch(`http://localhost:3000/tasks/${id}.json`, { method: 'DELETE' })
        .then(response => document.location.reload(true));
}

fetchTasksList();
