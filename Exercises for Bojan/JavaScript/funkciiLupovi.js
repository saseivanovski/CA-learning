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
    if (!sortingDuplicates.includes(i * 1)) {
      sortingDuplicates.push(i * 1);
    }
  }
  return sortingDuplicates;
};
console.log(sorting([5, 3, 3, 2, 1, 0]));

//namesto sort metodot mozeme da koristime i bubble sort funkcija i toa bi izlgedalo vaka
function bubbleSort(array) {
  let sortingDuplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
  for (let i of array) {
    if (!sortingDuplicates.includes(i * 1)) {
      sortingDuplicates.push(i * 1);
    }
  }
  return sortingDuplicates;
}
console.log(bubbleSort([5, 3, 3, 2, 1, 0]));

//ili vaka uste polesno so Set metodot koj sto avtomatski gi vadi duplikatite od niza
const sortingA = function (sortArray) {
  let newArr = sortArray.sort();
  console.log(newArr);
  let removingDuplicates = [...new Set(newArr)];
  console.log(removingDuplicates);
};
sortingA([5, 3, 3, 2, 1, 0]);
