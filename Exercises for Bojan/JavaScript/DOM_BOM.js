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
//black magic :) code is not mine (found it), prevents inputs of numbers
function preventNumber(e) {
  let keycode = e.keycode ? e.keycode : e.which;
  if ((keycode > 47 && keycode < 58) || (keycode > 95 && keycode < 107)) {
    e.preventDefault();
  }
}
//the validation
function validation(event) {
  event.preventDefault();
  let f = document.getElementById("fname");
  let l = document.getElementById("lname");
  let a = document.getElementById("address");
  let e = document.getElementById("email");
  let m = document.getElementById("mobile");

  if (e.value.includes("@")) {
    alert("ok");
    console.log(f.value, l.value, a.value, e.value, m.value);
  } else {
    alert("wrong email");
  }
}
