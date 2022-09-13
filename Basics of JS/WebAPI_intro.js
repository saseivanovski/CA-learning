//1. i can write same code like this for every element
function validation() {
  const a = document.getElementById("name");
  let text = "ok";
  if (a.validity.patternMismatch) {
    text = "not ok";
  }
  document.getElementById("p").innerHTML = text;
}

//trying another solution...
// function validation() {
//   let inputs = document.getElementsByTagName("input");

//   for (let i = 0; i < inputs.length; i++) {
//     console.log(inputs[i].checkValidity());
//   }
// }

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
