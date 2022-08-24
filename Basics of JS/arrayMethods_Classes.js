'use strict'
//1.
const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245 },
];

//sort objects by title
let sorted = library.sort(function (a, b) {
  return a.title > b.title;
});
sorted = JSON.stringify(sorted); //ima li i drug nacin ?
console.log(sorted);

//just authors names
const authors = library.map(function (author) {
  return author.author;
});
console.log(authors);

//books with library 1254
const books = library.filter((libraryID) => libraryID.libraryID == 1254); //Zosto so filter metod tuka mi dava array so prazen objekt ne mi pecati vrednost ?,(a na js.fiddle.net raboti kako sto treba)
console.log(books);

//2.
class Car {
  constructor(brand, year, hp) {
    this.brand = brand;
    this.year = year;
    this.hp = hp;
  }
  //how old is the car
  carAge() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  //checking user age
  userCanDrive() {
    for (let i = 0; i < this.year.length; i++) {
      if (this.year[i] > 25) {
        console.log(`${this.brand[i]} You can drive`);
      } else {
        console.log(`${this.brand[i]} You can only drive cars with max 105hp`);
      }
    }
  }
}

//my car age
let myCar = new Car("Ford", 2012);
console.log(myCar.carAge());

//users array with objects, age check
let users = [
  { name: "Sasho", age: 33 },
  { name: "Vesna", age: 22 },
  { name: "Ivan", age: 31 },
];
//deconstracting name and age
const userAge = users.map(function (age) {
  return age.age;
});
const userName = users.map(function (name) {
  return name.name;
});
//calling function for age check
let b = new Car(userName, userAge);
b.userCanDrive();
