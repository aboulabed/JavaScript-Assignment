// Assi 1

// let dateNow = new Date();
// let myBirthday = new Date("Aug 08 2009");
// let dateDiff = dateNow - myBirthday;

// let seconds = (dateDiff / 1000).toFixed();
// let minutes = (seconds / 60).toFixed();
// let hours = (minutes / 60).toFixed();
// let days = (hours / 24).toFixed();
// let months = (days / 30).toFixed();
// let years = (days / 365.25).toFixed();
// let decades = (years / 10).toFixed();

// console.log(`I am ${seconds} seconds old`);
// console.log(`I am ${minutes} minutes old`);
// console.log(`I am ${days} days old`);
// console.log(`I am ${months} months old`);
// console.log(`I am ${years} years old`);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

// Assi 2
// let date = new Date(0);
// date.setFullYear(1980)
// date.setHours(0)
// date.setSeconds(1)
// console.log(date);
// // Needed Output

// ("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");

// Assi 3
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let date = new Date();
// date.setDate(0);
// console.log(date);
// console.log(`Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate() - 1}`);
// // Needed Output

// ("Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)");
// ("Previous Month Is April And Last Day Is 30");

// Assi 4

// let dae = new Date("2009 8 8")
// console.log(dae);
// let date = new Date(2009,7,8)
// date.setHours(0,0,0,0)
// console.log(date);
// let dat = new Date("2009*8*8")
// console.log(dat);

// Assi 5

// let start = performance.now()
// for (i = 1; i< 99999 ;i++) {
//   console.log(i);
// }
// let end = performance.now()
// let dur = end - start
// console.log(`Loop Took ${Math.trunc(dur)} Milliseconds.`);

// Assi 6

// function* gen() {
//   let i = 1;
//   while (true) {
//     yield 100 * i * i - 160 * i + 74;
//     i++;
//   }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// Assi 7

// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here
// function* genAll() {
//   yield* new Set(genNumbers());
//   yield* new Set(genLetters());

// }
// let generator = genAll()

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

// Assi 8
import calc from "./modu.js";
import { nums as modOne } from "./modu2.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // Output => 60
