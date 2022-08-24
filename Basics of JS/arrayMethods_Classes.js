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
const books = library.find((libraryID) => libraryID.libraryID == 1254); //so filter metod mi dava prazno ne znam zosto
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
  userAge(x) {
    for (let i = 0; i < x.length; i++) {
      if (this.year > 25) {
        return `You can drive`;
      } else {
        return `You can only drive cars with max 105hp`;
      }
    }
  }
}
//my car
let myCar = new Car("Ford", 2012);
console.log(myCar.carAge());
//users array with objects
let users = [
  { name: "Sasho", age: 33 },
  { name: "Vesna", age: 22 },
  { name: "Ivan", age: 31 },
];
//separated users
let user1 = new Car("", 33);
console.log(user1.userAge(users));
let user2 = new Car("", 22);
console.log(user2.userAge(users));
let user3 = new Car("", 31);
console.log(user3.userAge(users));
