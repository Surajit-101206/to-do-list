const now = new Date();

document.getElementById("day").textContent = now.toLocaleDateString("en-US", {
  weekday: "long",
});
document.getElementById("date").textContent = now.getDate();
document.getElementById("month").textContent = now.toLocaleDateString("en-US", {
  month: "long",
});

const submit = document.querySelector(".task_add");
const taskBox = document.querySelector(".task_list");
const taskCount = document.querySelector(".count_area");

// ================================== empty div ==============================================

const emtybox = document.createElement("div");
emtybox.className = "Empty";
emtybox.textContent = "No tasks yet. Add your first one above.";
emtybox.style.height = "11vh";
emtybox.style.width = "50vh";
emtybox.style.border = "2px solid, black";
emtybox.style.borderRadius = "10px";
emtybox.style.backgroundColor = "#ffffff";
emtybox.style.color = "gray";
emtybox.style.display = "flex";
emtybox.style.justifyContent = "center";
emtybox.style.alignItems = "center";
emtybox.style.cursor = " default";

taskBox.prepend(emtybox);

//====================================== task list box ===================================

function List() {
  taskBox.style.minHeight = "3px";
  taskBox.style.backgroundColor = "white";
  taskBox.style.border = "2px, solid black";
}

//====================================== task submit button ========================================

const input = document.getElementById("textinput");

function addText() {
  const value = input.value.trim();

  // Only add if the input is not empty
  if (value !== "") {
    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.style.display = "flex";
    newItem.style.alignItems = "center";
    newItem.style.gap = "10px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.height = "24px";
    checkbox.style.width = "24px";
    checkbox.style.padding = "0";
    checkbox.style.cursor = "pointer";

    const text = document.createElement("span");
    text.textContent = value;

    checkbox.addEventListener("change", () => {
      text.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    newItem.append(checkbox, text);

    taskBox.appendChild(newItem); // Adds item to the box
    input.value = ""; // Clears input for next entry
    input.focus(); // Keeps cursor in input box

    taskCount.style.color = "gray";

    allbtn.style.backgroundColor = "#1f7a6d";
    allbtn.style.border = "transparent";
    allbtn.style.color = "#ffffff";
    allbtn.style.cursor = "pointer";

    todobtn.style.backgroundColor = "transparent";
    todobtn.style.border = "2px, solid gray";
    todobtn.style.color = "black";
    todobtn.style.cursor = "pointer";

    donebtn.style.backgroundColor = "transparent";
    donebtn.style.border = "2px, solid gray";
    donebtn.style.color = "black";
    donebtn.style.cursor = "pointer";
  }
}

submit.addEventListener("click", () => {
  List();
  addText();
  emtybox.remove();
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addText();
  }
});

// ------------------------------- all button -------------------------------------

const allbtn = document.querySelector(".all");

allbtn.addEventListener("click", () => {
  allbtn.style.backgroundColor = "#1f7a6d";
  allbtn.style.color = "#ffffff";
  allbtn.style.border = "transparent";

  todobtn.style.backgroundColor = "transparent";
  todobtn.style.color = "black";
  todobtn.style.border = "2px, solid gray";

  donebtn.style.backgroundColor = "transparent";
  donebtn.style.color = "black";
  donebtn.style.border = "2px, solid gray";
});

// ------------------------------- to_do button -------------------------------------

const todobtn = document.querySelector(".to_do");

todobtn.addEventListener("click", () => {
  todobtn.style.backgroundColor = "#1f7a6d";
  todobtn.style.color = "white";
  todobtn.style.border = "transparent";

  allbtn.style.backgroundColor = "transparent";
  allbtn.style.color = "black";
  allbtn.style.border = "2px, solid gray";

  donebtn.style.backgroundColor = "transparent";
  donebtn.style.color = "black";
  donebtn.style.border = "2px, solid gray";
});

// ------------------------------- done button -------------------------------------

const donebtn = document.querySelector(".done");

donebtn.addEventListener("click", () => {
  donebtn.style.backgroundColor = "#1f7a6d";
  donebtn.style.color = "white";
  donebtn.style.border = "transparent";

  allbtn.style.backgroundColor = "transparent";
  allbtn.style.color = "black";
  allbtn.style.border = "2px, solid gray";

  todobtn.style.backgroundColor = "transparent";
  todobtn.style.color = "black";
  todobtn.style.border = "2px, solid gray";
});
