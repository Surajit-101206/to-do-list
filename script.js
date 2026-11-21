const allbtn = document.querySelector(".all");
const todobtn = document.querySelector(".to_do");
const donebtn = document.querySelector(".done");
const user = document.querySelector("#userinput");
const submit = document.querySelector(".task_add")

submit.addEventListener("click",() => {
  const input = document.getElementById("userinput");
  console.log(input.value);
});

// ------------------------------- All button -------------------------------------

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
