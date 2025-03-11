// カウンターの初期値
let count = 0;

// HTMLの要素を取得
const counterElement = document.getElementById("counter");
const buttonElement = document.getElementById("countButton");

// ボタンがクリックされたらカウントを増やす
buttonElement.addEventListener("click", function() {
    count++; // カウントを増やす
    counterElement.textContent = count; // HTMLに反映
});
