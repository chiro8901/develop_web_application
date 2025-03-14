document.addEventListener("DOMContentLoaded", function(){
    const counterContainer = document.getElementById("counter-container");
    const addCounterButton = document.getElementById("add-counter-button");
    addCounterButton.addEventListener("click", function(){
        addCounter();
    });

    const counters = JSON.parse(localStorage.getItem("counters")) || [];

    console.log(localStorage.getItem("counters"));
    console.log("addCounterButton:", addCounterButton);
    console.log("counters:", counters);

    counters.forEach(element => {
        addCounter(element)
    });

    function addCounter(savedValue = 0){
        const counterWrapper = document.createElement("div");
        counterWrapper.classList.add("counter-wrapper")

        const counterDisplay = document.createElement("p");
        counterDisplay.classList.add("counter-display");
        counterDisplay.textContent = savedValue;

        const incButton = document.createElement("button");
        incButton.classList.add("inc-button");
        incButton.textContent = "+"
        incButton.addEventListener("click", function(){
            let count = parseInt(counterDisplay.textContent, 10);
            counterDisplay.textContent = count + 1;
            savedValue = count + 1;
            updatelocalStorage();
        })

        const decButton = document.createElement("button");
        decButton.classList.add("decc-button");
        decButton.textContent = "-"
        decButton.addEventListener("click", function(){
            let count = parseInt(counterDisplay.textContent, 10);
            counterDisplay.textContent = count - 1;
            savedValue = count - 1;
            updatelocalStorage();
        })

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function(){
            counterWrapper.remove();
            updatelocalStorage();
        })

        counterWrapper.appendChild(counterDisplay);
        counterWrapper.appendChild(incButton);
        counterWrapper.appendChild(decButton);
        counterWrapper.appendChild(deleteButton);        
        counterContainer.appendChild(counterWrapper);
        console.log("counter added");
        counters.push(savedValue);
        updatelocalStorage();
    }

    function updatelocalStorage(){
        let counters = Array.from(document.getElementsByClassName("counter-wrapper")).map(element =>
            parseInt(element.querySelector(".counter-display").textContent, 10)
        )
        localStorage.setItem("counters", JSON.stringify(counters));
    }
})