// kreiraj search i logo
let a = document.getElementById("leftAside");
let searchDiv = document.createElement('div');
searchDiv.classList.add("displayFlex")
let b = document.createElement("input");
let logo = document.createElement("div")
logo.classList.add('colorBlue')
searchDiv.appendChild(logo)
searchDiv.appendChild(b)
a.prepend(searchDiv);
    
// kreiraj nav
let c = document.getElementById("nav");
let d = document.createElement("div");
d.classList.add("navbar");
c.prepend(d);

// function navKocki() {
//   let array = [1, 2, 3, 4, 5, 6];
//   for (const i of array) {
//     let box = document.createElement("div");
//     box.classList.add("colorBlue");
//     d.appendChild(box);
//   }
// }
// navKocki();

let not = document.getElementById('notifications')
let pic = document.createElement('div')
pic.classList.add('colorBlue')
not.appendChild(pic)
