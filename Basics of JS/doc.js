let fName = "Sasho";
let lName = "Ivanovski";
let age = 33;
let job = "Web.Dev";
let male = true;

let user = {
    firstName: fName,
    lastName: lName,
    userAge: age,
    userJob: job,
    maleGender: male
};

console.log(user);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
   alert(fName);
});



