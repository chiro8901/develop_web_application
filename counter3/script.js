document.addEventListener("DOMContentLoaded", function () {
    const counterContainer = document.getElementById("counter-container");
    const addCounterButton = document.getElementById("addCounterButton");

    let counterId = 1; // カウンター識別用

    // カウンターを追加する関数
    function addCounter() {
        // カウンターの要素を作成
        const counterWrapper = document.createElement("div");
        counterWrapper.classList.add("counter-wrapper");

        const counterDisplay = document.createElement("p");
        counterDisplay.textContent = "0";
        counterDisplay.id = `counter-${counterId}`;

        const countButton = document.createElement("button");
        countButton.textContent = "カウントアップ";
        countButton.onclick = function () {
            let currentCount = parseInt(counterDisplay.textContent, 10);
            counterDisplay.textContent = currentCount + 1;
        };

        // カウンター削除ボタン
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.style.backgroundColor = "#dc3545"; // 赤色
        deleteButton.onclick = function () {
            counterWrapper.remove();
        };

        // 要素を追加
        counterWrapper.appendChild(counterDisplay);
        counterWrapper.appendChild(countButton);
        counterWrapper.appendChild(deleteButton);
        counterContainer.appendChild(counterWrapper);

        counterId++; // 次のカウンターID
    }

    // 「カウンターを追加」ボタンのクリックイベント
    addCounterButton.addEventListener("click", addCounter);
});
