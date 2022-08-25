//1.
//adding new row and cells with value inside
function adding() {
  let table = document.querySelector("table");
  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.textContent = "4";
  cell2.textContent = "Ivan";
  cell3.textContent = "24";
  cell4.textContent = "Male";
}
adding();

//2.
//using next element read-only property
let list = document.querySelector("#li");
let two = list.nextElementSibling;
two.style.color = "red";
let three = two.nextElementSibling;
three.style.color = "green";

//3.
//change style to all li elements
let ul = document.querySelectorAll("li");
for (let i = 0; i < ul.length; i++) {
  ul[i].style.backgroundColor = "yellow";
}

//4.
//console log form entered data and return it to li elements
let nameInput = document.getElementById("name");
let surnameInput = document.getElementById("surname");
document.querySelector("#form").addEventListener("submit", function (a) {
  a.preventDefault();
  console.log(nameInput.value, surnameInput.value);
});

document.querySelector("button").addEventListener("click", function () {
  let x = document.getElementById("name").value;
  let y = document.getElementById("surname").value;
  document.getElementById("li").innerHTML = `${x} ${y}`;
});
