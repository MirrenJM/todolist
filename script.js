let myInput = document.querySelector(".my-input");
let myButton = document.querySelector('button');
let myTaskContainer = document.querySelector(".task-container")





myButton.addEventListener("click",function myClick() {
    let div = document.createElement('div');
    myTaskContainer.appendChild(div);
})
console.log(myButton);