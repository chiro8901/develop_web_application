document.addEventListener("DOMContentLoaded", function(){
    const counterContainer = document.getElementById("counterContainer");

    for(let i = 0; i < 3; i++){
        createCounter();
    }

    function createCounter(){
        const counterWrapper = document.createElement("div");
        counterWrapper.classList.add("counter-wrapper");

        const counter = document.createElement("p");
        counter.classList.add("counter-display")
        counter.textContent = "0";

        const button = document.createElement("button");
        button.classList.add("button-counter")
        button.textContent = "カウントアップ";
        button.addEventListener("click", function(){
            let count = parseInt(counter.textContent, 10);
            counter.textContent = count + 1;
        });

        counterWrapper.appendChild(counter);
        counterWrapper.appendChild(button);
        counterContainer.appendChild(counterWrapper);
    }
});