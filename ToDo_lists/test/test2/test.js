function addTask(event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ
    const input = document.getElementById("taskInput");
    console.log("追加されたタスク:", input.value);
    input.value = ""; // 入力欄をリセット
}
