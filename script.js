const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");

function saveData(){
    localStorage.setItem("goals", listContainer.innerHTML);
}

function showgoals(){
    listContainer.innerHTML = localStorage.getItem("goals") || '';
}

showgoals();

function addGoal(){
    if(inputBox.value === ''){
        alert("Please enter a Goal.");
        return;
    }
    else
    {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "❌";
        span.className = "delete";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);