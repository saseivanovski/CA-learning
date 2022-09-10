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
function validation(event) {
  event.preventDefault();
  let f = document.getElementById("fname");
  let l = document.getElementById("lname");
  let a = document.getElementById("address");
  let e = document.getElementById("email");
  let m = document.getElementById("mobile");

  if (e.value.includes("@")) {
    alert("ok");
  } else {
    alert("wrong email");
  }
  console.log(f.value, l.value, a.value, e.value, m.value);
}
