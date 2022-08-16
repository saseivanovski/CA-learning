//1
const firstFunc = function (a, b, c) {
  if (a == b || b == c || a == c) {
    return true;
  } else {
    return false;
  }
};
console.log(firstFunc(3, 5, "5"));

//2
const funcMonth = function (month) {
  let thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
  let thirtyDays = [4, 6, 9, 11];
  if (thirtyOneDays.includes(month)) {
    return `31 days`;
  } else if (thirtyDays.includes(month)) {
    return `30 days`;
  } else {
    let year = prompt(`Enter Year`);
    if (year % 4 !== 0) {
      return `28 days`;
    } else if (year % 4 === 0 && year % 400 === 0) {
      return `29 days`;
    } else if (year % 4 === 0 && year % 100 === 0) {
      return `28 days`;
    } else {
      return `29 days`;
    }
  }
};
console.log(funcMonth(6));
