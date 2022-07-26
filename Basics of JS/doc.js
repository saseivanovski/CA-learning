let fName = "Sasho";
let lName = "Ivanovski";
let age = 33;
let job = "Web.Dev";
let male = true;

let user = {
    fName: "Sasho",
    lName: "Ivanovski",
    age: 33,
    job: "Web.Dev",
    male: true
};

console.log(user);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
   alert(fName);
});



