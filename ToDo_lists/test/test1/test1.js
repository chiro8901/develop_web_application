function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText) {
        console.log("追加されたタスク:", taskText);
        input.value = ""; // 入力欄をリセット
    }
}
