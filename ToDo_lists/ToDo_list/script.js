document.addEventListener("DOMContentLoaded", function(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const taskContainer = document.getElementById("task-container");
    const addTaskButton = document.getElementById("add-task-button");
    addTaskButton.addEventListener("click", function(){
        addTask();
    })

    console.log("localstorage", localStorage.getItem("tasks"))
    console.log("tasks", tasks)
    tasks.forEach(element => {
        addTask(element)
    });

    function addTask(savedTask = ""){
        const taskWrapper = document.createElement("li");
        taskWrapper.classList.add("task-wrapper");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        const taskInput = document.getElementById("task-input");
        const taskText = document.createElement("span");
        taskText.classList.add("task-text")
        taskText.textContent = taskInput.value + savedTask;
        if(taskText.textContent === "") return;
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", function(){
            taskWrapper.remove();
            updateLocalStorage();
        })

        taskWrapper.appendChild(checkBox);
        taskWrapper.appendChild(taskText);
        taskWrapper.appendChild(deleteButton);
        taskContainer.appendChild(taskWrapper);
        updateLocalStorage();

        taskInput.value = "";
        console.log("task added");
    }

    function updateLocalStorage(){
        let tasks = Array.from(document.getElementsByClassName("task-wrapper")).map(element =>
            element.querySelector(".task-text").textContent
        )
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})