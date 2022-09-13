//1.
function validation() {
  let text = "ok";
  if (document.getElementById("name").validity.patternMismatch) {
    text = "not ok";
  }
  document.getElementById("p").innerHTML = text;
}

//2.
function storage() {
  let a = prompt("Enter your age");
  let b = prompt("Your full name");
  localStorage.setItem("age", a);
  sessionStorage.setItem("name", b);
}

//3.
async function text() {
  let getText = await fetch("wiki1.txt").then((getText) => getText.text());
  let getAText = await fetch("wiki2.txt").then((getAText) => getAText.text());
  if (getAText.length > getText.length) {
    console.log(getAText);
  } else {
    console.log(getText);
  }
}
text();
