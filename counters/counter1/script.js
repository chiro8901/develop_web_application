// カウンターの初期値
let count = 0;

// HTMLの要素を取得
const counterElement = document.getElementById("counter");
const buttonElement = document.getElementById("countButton");
const resetElement = document.getElementById("resetButton");

// ボタンがクリックされたらカウントを増やす
buttonElement.addEventListener("click", function() {
    count++; // カウントを増やす
    counterElement.textContent = count; // HTMLに反映
});

//リセットが押されたらリセット
resetElement.addEventListener("click", function() {
    count = 0; 
    counterElement.textContent = count; // HTMLに反映
});