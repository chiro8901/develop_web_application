document.addEventListener("DOMContentLoaded", function(){
    const taskContainer = document.getElementById("task-container");
    const addTaskButton = document.getElementById("add-task-button");
    addTaskButton.addEventListener("click", function(){
        addTask();
    })

    function addTask(){
        const taskWrapper = document.createElement("li");
        taskWrapper.classList.add("task-wrapper");

        const taskInput = document.getElementById("task-input");
        const taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        if(taskText.textContent === "") return;
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", function(){
            taskWrapper.remove();
        })

        taskWrapper.appendChild(taskText);
        taskWrapper.appendChild(deleteButton);
        taskContainer.appendChild(taskWrapper);

        taskInput.value = "";
        console.log("task added");
    }
})