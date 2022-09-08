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
// document.querySelector(".name").onblur = function () {
//   if (document.querySelector(".name", "lastName").value != "") {
//     document.querySelector(".errorName").innerHTML = "";
//   }
// };

document.querySelector(".name").onfocus = function () {
  if (document.querySelector(".name").value == "") {
    document.querySelector(".errorName").innerHTML = "Fill";
  }
};

document.querySelector(".name").addEventListener("keydown", function () {
  document.querySelector(".errorName").innerHTML = "";
});

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
