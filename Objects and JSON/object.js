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
