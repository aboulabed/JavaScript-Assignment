let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let con = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, curent) {
    return `${acc}${curent}`;
  });
console.log(con);
// Elzero

let myString = "EElllzzzzzzzeroo";
let my = myString
  .split("")
  .filter((el, index) => (myString.indexOf(el) === index))
  .join("");
console.log(my);
// Elzero

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myArrayF = myArray.reduce((acc, el) => acc.concat(el), []).join("");

console.log(myArrayF);
// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsAndStringsFM = numsAndStrings
  .filter(function (ele) {
    return typeof ele !== "string";
  })
  .map(function (ele) {
    return -ele;
  });

console.log(numsAndStringsFM);
// [-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];
let num = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? current * acc : current + acc;
}, 1);
console.log(num);
// 500
