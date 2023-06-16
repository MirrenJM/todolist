let myInput = document.querySelector(".my-input");
let myButton = document.querySelector('button');
let myTaskContainer = document.querySelector(".task-container")

myButton.addEventListener("click",function myClick() {
    let task = document.createElement('div');
    task.classList.add("task-box");
    task.innerHTML = myInput.value;
    myTaskContainer.appendChild(task);
})

removeTask.addEventListener("click", function removeTaskClick(){
    let removeTask = document.createElement ("button";)
    
}

)