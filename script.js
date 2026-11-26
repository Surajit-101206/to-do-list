const allbtn = document.querySelector(".all");
const todobtn = document.querySelector(".to_do");
const donebtn = document.querySelector(".done");
const submit = document.querySelector(".task_add");
const taskBox = document.querySelector(".task_list");
const main = document.querySelector(".to_do_list");

//====================================== check box ======================================

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "my-checkbox";
checkbox.style.height = "24px";
checkbox.style.width = "24px";
checkbox.style.cursor = "pointer";

// ================================== empty div ==============================================

const emtybox = document.createElement("div");
emtybox.className = "Empty";
emtybox.textContent = "No tasks yet. Add your first one above.";
emtybox.style.height = "11vh";
emtybox.style.width = "60.2vh";
emtybox.style.border = "2px solid, black";
emtybox.style.borderRadius = "10px";
emtybox.style.backgroundColor = "#ffffff";
emtybox.style.color = "gray";
emtybox.style.display = "flex";
emtybox.style.justifyContent = "center";
emtybox.style.alignItems = "center";

main.append(emtybox);

//====================================== task submit button ========================================

const input = document.getElementById("textinput");

function addText() {
  const value = input.value.trim();

  // Only add if the input is not empty
  if (value !== "") {
    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.textContent = value;

    taskBox.appendChild(newItem); // Adds item to the box
    input.value = ""; // Clears input for next entry
    input.focus(); // Keeps cursor in input box
  }
}

submit.addEventListener("click", addText);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addText();
  }
});

// ------------------------------- all button -------------------------------------

allbtn.addEventListener("click", () => {
  allbtn.style.backgroundColor = "#1f7a6d";
  allbtn.style.color = "white";
  allbtn.style.border = "transparent";

  todobtn.style.backgroundColor = "";
  todobtn.style.color = "";
  todobtn.style.border = "";

  donebtn.style.backgroundColor = "";
  donebtn.style.color = "";
  donebtn.style.border = "";
});

// ------------------------------- to_do button -------------------------------------

todobtn.addEventListener("click", () => {
  todobtn.style.backgroundColor = "#1f7a6d";
  todobtn.style.color = "white";
  todobtn.style.border = "transparent";

  allbtn.style.backgroundColor = "";
  allbtn.style.color = "";
  allbtn.style.border = "";

  donebtn.style.backgroundColor = "";
  donebtn.style.color = "";
  donebtn.style.border = "";
});

// ------------------------------- done button -------------------------------------

donebtn.addEventListener("click", () => {
  donebtn.style.backgroundColor = "#1f7a6d";
  donebtn.style.color = "white";
  donebtn.style.border = "transparent";

  allbtn.style.backgroundColor = "";
  allbtn.style.color = "";
  allbtn.style.border = "";

  todobtn.style.backgroundColor = "";
  todobtn.style.color = "";
  todobtn.style.border = "";
});
