// Blinking clock in console.log
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
// delay starting counter every time we push start button (even after pause)
const twoArguments = function (delay, num) {
  setTimeout(() => {
    timing = setInterval(() => {
      console.log(timer++);
      if (timer === num + 1) {
        clearInterval(timing);
        timer = 0;
      }
    }, 1 * 1000);
  }, delay * 1000);
};

const Start = document
  .querySelector("#start")
  .addEventListener("click", function () {
    twoArguments(2, 10);
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
