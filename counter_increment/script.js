document.addEventListener("DOMContentLoaded", function(){
    const counterInc = document.getElementById("counter-inc-btn")
    const counterContainer = document.getElementsByClassName("counter-container")[0];
    counterInc.addEventListener("click", function(){
        createCounter();
    })

    function createCounter(){

        const counterWrapper = document.createElement("div");
        counterWrapper.classList.add("counter-wrapper")

        const counterDisplay = document.createElement("p");
        counterDisplay.textContent = "0"
        counterDisplay.classList.add("counter-display");

        const counterButton = document.createElement("button");
        counterButton.textContent = "カウントアップ"
        counterButton.classList.add("counter-button");
        counterButton.addEventListener("click", function(){
            let count = parseInt(counterDisplay.textContent, 10);
            counterDisplay.textContent = count + 1;
        })

        counterWrapper.appendChild(counterDisplay);
        counterWrapper.appendChild(counterButton);
        counterContainer.appendChild(counterWrapper);
        }
})