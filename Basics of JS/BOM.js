// Clock in devtools
// setInterval(() => {
//   console.log(
//     Intl.DateTimeFormat(navigator.locale, { timeStyle: "medium" }).format(
//       new Date()
//     )
//   ),
//     setTimeout(() => console.clear(), 1900);
// }, 1000);

// 1 , 2
let timer = 0;

const Start = document
  .querySelector("#start")
  .addEventListener("click", function () {
    setTimeout(() => {
      timing = setInterval(() => {
        console.log(timer++);
      }, 1000);
    }, 2000);
  });

const Pause = document
  .querySelector("#pause")
  .addEventListener("click", function () {
    clearInterval(timing);
  });

const Stop = document
  .querySelector("#stop")
  .addEventListener("click", function () {
    clearInterval(timing);
    console.clear();
    timer = 0;
  });

// 3

function newDoc() {
  window.location.assign("https://www.youtube.com/watch?v=_7rT-ixivWU");
}
// paste these on any page in dev tools and you will get the properties of the web page
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.search);
console.log(window.location.hash);
