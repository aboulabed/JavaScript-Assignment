// let names = function (...data) {
//   return `string [${data.join('],[')}] => Done`;
// };

let names = (...data) => `string [${data.join("], [")}] => Done!`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// string [Osama], ["Mohamed"], ["Ali"], [Ibrahim] => Done

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + +nums;
console.log(calc(10, myNumbers[0], myNumbers[1]));
