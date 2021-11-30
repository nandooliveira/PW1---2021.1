let taskListDiv = document.querySelector('#task-list');

function fetchTasksList() {
    fetch('http://localhost:3000/tasks.json', { method: 'GET' })
        .then(response => response.json())
        .then(tasks => {
            let template = document.querySelector('#task-template');

            tasks.forEach(task => {
                let clone = template.content.cloneNode(true);

                // atributindo o titulo
                let taskTitle = clone.querySelector('.task-title');
                taskTitle.textContent = task.title;

                // atribuindo a descrição
                let taskDescription = clone.querySelector('.task-description');
                taskDescription.textContent = task.description;

                let taskStatus = clone.querySelector('.task-status');
                taskStatus.dataset.id = task.id;

                if (task.status == 'completed') {
                    taskStatus.checked = true;
                }

                taskStatus.addEventListener('change', (event) => {
                    let newStatus = taskStatus.checked ? 'completed' : 'pendente';
                    changeStatus(taskStatus.dataset.id, newStatus);
                });

                let deleteButton = clone.querySelector('.task-delete');
                deleteButton.dataset.id = task.id;
                deleteButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    deleteTask(deleteButton.dataset.id);
                });

                taskListDiv.appendChild(clone);
            });
        });

    console.log("Código após a requisição");
}


// DELETE - /tasks/id.json
function deleteTask(id) {
    fetch(`http://localhost:3000/tasks/${id}.json`, { method: 'DELETE' })
        .then(response => document.location.reload(true));
}

// PUT /tasks/id.json
function changeStatus(id, status) {
    fetch(`http://localhost:3000/tasks/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(
            {
                task: {
                    status: status
                }
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => console.log("Atualizado com sucesso!"));
}

fetchTasksList();
