// 1 . Da se napravi funkcija koja kje presmetuva zbir od elementi vo niza
// da raboti za bilo koja niza
// nizata e [1, 5, 7, 12, 10] i toa da e = 35
// hit : for loop
const sum = function (array) {
  let sumNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    sumNumbers = sumNumbers + array[i];
  }
  return sumNumbers;
};
console.log(sum([1, 5, 7, 12, 10]));

// 2 . Da se napravi funkcija koja kje ni dade koi broevi se duplikati vo niza
// da raboti za bilo koja niza
// niza [1, 2, 3, 1, 5, 6, 2]
// pr : [1, 2]
const duplicates = function (numbers) {
  let firstArray = [];
  let duplicatesArray = [];
  for (let i of numbers) {
    if (firstArray.includes(i * 1)) {
      duplicatesArray.push(i * 1);
    } else {
      firstArray.push(i * 1);
    }
  }
  return duplicatesArray;
};
console.log(duplicates([1, 2, 3, 1, 5, 6, 2]));

// 3 . Da se podredat po redosled elementite vo nizata
// da raboti za bilo koja niza
// niza [5,3,3,2,1,0]
// pr : [0,1,2,3,3,5]
// posle toa da se izbrisat duplikatite...
// pr [0,1,2,3,5]
const sorting = function (sortArray) {
  let newArr = sortArray.sort();
  console.log(newArr);
  let sortingDuplicates = [];
  for (let i of sortArray) {
    if (sortingDuplicates.includes(i * 1)) {
    } else {
      sortingDuplicates.push(i * 1);
    }
  }
  return sortingDuplicates;
};
console.log(sorting([5, 3, 3, 2, 1, 0]));
