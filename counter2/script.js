// カウンター1の処理
let count1 = 0;
document.getElementById("button1").addEventListener("click", function () {
    count1++;
    document.getElementById("counter1").textContent = count1;
});

// カウンター2の処理
let count2 = 0;
document.getElementById("button2").addEventListener("click", function () {
    count2++;
    document.getElementById("counter2").textContent = count2;
});
