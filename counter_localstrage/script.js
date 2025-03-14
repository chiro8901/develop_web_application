document.addEventListener("DOMContentLoaded", function(){
    const counterContainer = document.getElementsByClassName("counter-container")[0];
    let counters = JSON.parse(localStorage.getItem("counters")) || []; // ローカルストレージからデータを取得
    let counterId = counters.length; // 現在のカウンターの数を基準にIDを決定

    const counterInc = document.getElementById("counter-inc-btn");
    counterInc.addEventListener("click", function(){
        createCounter();
    });

    function createCounter(savedValue = 0) {
        const counterWrapper = document.createElement("div");
        counterWrapper.classList.add("counter-wrapper");
        counterWrapper.dataset.id = counterId; // カウンター識別用データ属性

        const counterDisplay = document.createElement("p");
        counterDisplay.textContent = savedValue;
        counterDisplay.classList.add("counter-display");

        const counterButton = document.createElement("button");
        counterButton.textContent = "カウントアップ";
        counterButton.classList.add("counter-button");
        counterButton.addEventListener("click", function(){
            let count = parseInt(counterDisplay.textContent, 10);
            count += 1;
            counterDisplay.textContent = count;
            updateLocalStorage(); // カウントが変わるたびに保存
        });

        const resetButton = document.createElement("button");
        resetButton.textContent = "リセット";
        resetButton.classList.add("reset-button");
        resetButton.addEventListener("click", function(){
            counterDisplay.textContent = "0";
            updateLocalStorage(); // リセット時も保存
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function(){
            counterWrapper.remove();
            counters = counters.filter(c => c.id !== parseInt(counterWrapper.dataset.id, 10));
            updateLocalStorage(); // 削除時も保存
        });

        counterWrapper.appendChild(counterDisplay);
        counterWrapper.appendChild(counterButton);
        counterWrapper.appendChild(resetButton);
        counterWrapper.appendChild(deleteButton);
        counterContainer.appendChild(counterWrapper);

        counters.push({ id: counterId, value: savedValue });
        updateLocalStorage();
        counterId++;
    }

    function updateLocalStorage() {
        counters = Array.from(document.getElementsByClassName("counter-wrapper")).map(wrapper => ({
            id: parseInt(wrapper.dataset.id, 10),
            value: parseInt(wrapper.querySelector(".counter-display").textContent, 10)
        }));
        localStorage.setItem("counters", JSON.stringify(counters));
    }

    // ページを開いたときにローカルストレージからカウンターを復元
    counters.forEach(counter => createCounter(counter.value));
});
