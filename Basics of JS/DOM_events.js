// 1

function validation() {
  let form = document.getElementById("form");

  document.getElementById("button").addEventListener("click", function () {
    if (
      document.querySelector(
        ".name",
        ".lastname",
        ".address",
        ".gender",
        ".email"
      ).value == ""
    ) {
      alert("Empty field");
    } else {
      alert("OK");
    }
    form.submit();
  });
}
validation();

// 2
// solution for one element only (onblur is not needed)

// document.querySelector(".name").onblur = function () {
//   if (document.querySelector(".name").value == "") {
//     document.querySelector(".errorName").innerHTML = "Fill";
//   }
// };
// document.querySelector(".name").onfocus = function () {
//   if (document.querySelector(".name").value == "") {
//     document.querySelector(".errorName").innerHTML = "Fill";
//   }
// };

// document.querySelector(".name").addEventListener("keydown", function () {
//   document.querySelector(".errorName").innerHTML = "";
// });

// because the onfocus is for one element only at given time, global function with if's
function focused() {
  if (document.querySelector(".name").value == "") {
    document.querySelector(".errorName").innerHTML = "Fill";
  }
  if (document.querySelector(".lastname").value == "") {
    document.querySelector(".errorLastname").innerHTML = "Fill";
  }
  if (document.querySelector(".address").value == "") {
    document.querySelector(".errorAddress").innerHTML = "Fill";
  }
  if (document.querySelector(".gender").value == "") {
    document.querySelector(".errorGender").innerHTML = "Fill";
  }
  if (document.querySelector(".email").value == "") {
    document.querySelector(".errorEmail").innerHTML = "Fill";
  }
}
// if we enter a key remove error message
function key() {
  document.querySelector(".errorName").innerHTML = "";
  document.querySelector(".errorLastname").innerHTML = "";
  document.querySelector(".errorAddress").innerHTML = "";
  document.querySelector(".errorGender").innerHTML = "";
  document.querySelector(".errorEmail").innerHTML = "";
}

// 3

let count = 0;

document.querySelector(".name").addEventListener("click", function () {
  count++;
  console.log(count);
});

document.querySelector("#reset").addEventListener("click", function () {
  count = 0;
});
console.log(count);
