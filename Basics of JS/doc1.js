// First
let numOne = 1; let a = String(numOne);
console.log(typeof numOne, typeof a);

let numZero = 0; let b = String(numZero);
console.log(typeof numZero, typeof b);

let one = "1"; let c = Number(one);
console.log(typeof one, typeof c);

let zero = "0"; let d = Number(zero);
console.log(typeof zero, typeof d);

let ten = "ten"; let e = Boolean(ten);
console.log(typeof ten, typeof e);

let boolT = true; let f = String(boolT);
console.log(typeof boolT, typeof f);

let boolF = false; let g = String(boolF);
console.log(typeof boolF, typeof g)

let falsy = null; let h = Number(falsy);
console.log(typeof falsy, typeof h);

let und = undefined; let i = Number(und);
console.log(typeof und, typeof i);

let emptyD = ""; let j = Number(emptyD);
console.log(typeof emptyD, typeof j);

let emptyS = ''; let k = Number(emptyS);
console.log(typeof emptyS, typeof k);

//Second
let first = 4;
let second = 13;
let third = 88 - 19;
let fourth = 1 + 9 + 8 + 8;
console.log(first, second, third, fourth);

//Third
let fifth = true ? first > second : fifth = false;
console.log(fifth);
let sixsth = (third % fourth);
console.log(sixth);
let seventh = "I am the "
if (fifth = true && sixth < 3) {
    console.log(seventh + "light");
}else {
    console.log(seventh + "darkness");
}