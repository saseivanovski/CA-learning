"use strict";

// 1.
const me = {
  name: "Saso",
  lastname: "Ivanovski",
  born: 1988,
  age: function () {
    return 2022 - this.born;
  },
};
const entries = Object.entries(me);
console.log(entries);

// 2.
const you = ["he", "she", "it"];
console.log(Object.assign({ ...you }));

// 3.
const one = {
  name: 1,
  age: 2,
};
const two = {
  name: 1,
  age: 2,
};

// easy solutiion for checking if the values of 2 objects are same
// console.log(JSON.stringify(one) === JSON.stringify(two));

const isEqual = (one, two) => {
  const obOne = Object.keys(one);
  const obTwo = Object.keys(two);

  for (let x of obOne) {
    if (one[x] !== two[x]) {
      return false;
    }
  }
  return true;
};
console.log(isEqual(one, two));
