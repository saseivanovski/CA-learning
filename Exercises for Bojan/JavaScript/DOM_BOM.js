//jumping to pages - changing the path
function goToPage(string) {
  let path = window.location.pathname.split("/");
  path[path.length - 1] = string;
  path = path.join("/");
  window.location.pathname = path;
}
//asking for number for calculation
function promptMe() {
  let a = prompt("number");
  let b = prompt("number");
  document.getElementById("calc").textContent = a * 1 + b * 1;
}
//creating infinite paragraphs
function paragraphs() {
  setInterval(() => {
    const p = document.createElement("p");
    p.textContent = "Hello";
    document.body.appendChild(p);
  }, 1 * 1000);
}
//validate form
function validation() {
  let f = document.forms["form"]["fname"].value;
  let l = document.forms["form"]["lname"].value;
  let a = document.forms["form"]["address"].value;
  let e = document.forms["form"]["email"].value;
  let m = document.forms["form"]["mobile"].value;
}
