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


// For the custom alert box
function customAlert(message, gifUrl) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('alertGif').src = gifUrl;
    document.getElementById('alertBox').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('alertBox').style.display = 'none';
}


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
        customAlert("Congrats!", "media/images/yes.gif");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        customAlert("WHY!", "media/images/why.gif");
        saveData();
    }
}, false);


// For pressing Enter key to add goal
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addGoal();
    }
});

// For pressing Delete key to delete goal
document.addEventListener("keydown", function (e) {
    if (e.key === "Delete") {
        const checkedItems = document.querySelectorAll("li.checked");
        checkedItems.forEach(item => item.remove());
        saveData();
    }
});