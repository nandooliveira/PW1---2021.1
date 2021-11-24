let createButton = document.querySelector('#create-button');

function createTask(event) {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;

    fetch(
        "http://localhost:3000/tasks.json",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    task: {
                        title: title,
                        description: description
                    }
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(response => response.json())
    .then(data => {
        window.location.href = "index.html";
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });;
}

createButton.addEventListener('click', createTask);
