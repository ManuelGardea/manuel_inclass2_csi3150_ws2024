
let showAbtn = document.querySelector("#showA");
showAbtn.addEventListener("click", function () {
  document.getElementById("letterA").style.visibility = "visible";
});

let showBbtn = document.querySelector("#showB");
showBbtn.addEventListener("click", function () {
  document.getElementById("letterB").style.visibility = "visible";
});

let showCbtn = document.querySelector("#showC");
showCbtn.addEventListener("click", function () {
  document.getElementById("letterC").style.visibility = "visible";
});

let hideAbtn = document.querySelector("#hideA");
hideAbtn.addEventListener("click", function () {
  document.getElementById("letterA").style.visibility = "hidden";
});

let hideBbtn = document.querySelector("#hideB");
hideBbtn.addEventListener("click", function () {
  document.getElementById("letterB").style.visibility = "hidden";
});

let hideCbtn = document.querySelector("#hideC");
hideCbtn.addEventListener("click", function () {
  document.getElementById("letterC").style.visibility = "hidden";
});