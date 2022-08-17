//1
//pravime varijabla koja sto ke ima vrednost na indeksot na elementot od nizata, sto go dobivame preku value koga ja povikuvame funkcijata
//potoa istiot go eliminirame od nizata
function removeNumber(arr, value) {
  let index = arr.indexOf(value);
  arr.splice(index, 1);
  return arr;
}
console.log(removeNumber([1, 2, 3, 4, 5, 6], 5));

//2
//vaka bi proveril za dolzina na broj , ke pretrovram vo string i ke izbrojam dolzina
console.log([556575757].toString().length);

//eve so loop
const digits = function (i) {
  let result = 0;
  while (i > 0) {
    i = Math.floor(i / 10); //go delime brojot so 10,decimalata ja spustame na najniskata bliska vrednost,(so sekoe delenje eliminira eden broj) i broi kolku pati ja pravi operacijata
    result++; //i vo varijablata result ni dodava +1 za sekoja gorenapravena presmetka na i
  }
  return result;
};
console.log(digits(556575757)); //bar vaka sum ucel :)

//3
//lesno resenie,
let x = [2, 31, 55, 62, 93, 5, 125];
let largestNumber = Math.max(...x); //spread operator gi zima site elementi vo nizata, math max ni ja dava najvisokata vrednost
console.log(largestNumber);

// Tuka pravime sporedba , ovoj loop ja vrti celata niza i gi stava borevite eden po eden (zamenski) vo praznata array.
// se dodeka brojot od n e pogolem od toj vo nBig, ke go zameni
//koga ke zavrsi loopot na celata niza najviskiot broj ke ostane vo nBig nizata
let n = [2, 31, 55, 62, 93, 5, 125];
let nBig = [];
for (let i = 0; i < n.length; i++) {
  if (nBig < n[i]) {
    nBig = n[i];
  }
}
console.log(nBig);
