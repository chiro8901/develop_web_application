let count = 0;

const counterElement = document.getElementById("counter")
const buttonElement = document.getElementById("button")
const resetElement = document.getElementById("reset")

buttonElement.addEventListener("click", function(){
    count++;
    counterElement.textContent = count;
})

resetElement.addEventListener("click", function(){
    count = 0;
    counterElement.textContent = count;
})