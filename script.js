const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-btn");

function saveData() {
    localStorage.setItem("goals", listContainer.innerHTML);
}

function showGoals() {
    listContainer.innerHTML = localStorage.getItem("goals") || '';
}
showGoals();

function addGoal() {
    if (inputBox.value === '') {
        alert("Please enter a Goal.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputBox.value;

    let span = document.createElement("span");
    span.textContent = "X";
    span.className = "delete";
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

addButton.addEventListener("click", addGoal);

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
