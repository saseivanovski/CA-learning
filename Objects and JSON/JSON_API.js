"use strict";

// 1.
function getFile() {
  let request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      document.getElementById("OK").innerHTML = "Successful Post";
    }
  };
  request.send(JSON.stringify({ name: "Sase", age: "33" }));
}

// 2. show first 10 objects in HTML
const table = document.getElementById("postFirstTen");
const behindTable = document.getElementById("postLastTen");

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    for (let i = 0; i < 10; i++) {
      let row = document.createElement("tr");
      row.innerHTML = JSON.stringify(data[i]);
      table.appendChild(row);
    }
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

// 3. show last 10 objects in HTML
function getLastTen() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      fromBehind(request.responseText);
    }
  };
  request.send();
}

function fromBehind(data) {
  let objects = JSON.parse(data);
  let a = objects.id;
  console.log(objects);
  for (let i = objects.length; i > objects.length - 11; i--) {
    let row = document.createElement("tr");
    row.innerHTML = JSON.stringify(objects[i]);
    behindTable.appendChild(row);
  }
}
