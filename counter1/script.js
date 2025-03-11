// カウンターの初期値
let count = 0;

// HTMLの要素を取得
const buttonElement = document.getElementById("countButton");

// ボタンがクリックされたらカウントを増やす
buttonElement.addEventListener("click", function() {
    count++; // カウントを増やす
    buttonElement.textContent = count; // HTMLに反映
});
