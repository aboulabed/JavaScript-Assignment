// let start = 10;
// let end = 100;
// let exclude = 40;
// /*
// Output:
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// */
// for (let i = start; i <= end; i += start) {
//   if (i === exclude) continue;
//   else console.log(i);
// }

// let start = 10;
// let end = 0;
// let stop = 3;
/*
    Output:
        10
        09
        08
        07
        06
        05
        04
        03
*/
// for (let i = start; i >= stop; i--) {
//   if (i < 10) {
//     console.log(`0${i}`)
//   } else {
//     console.log(`${i}`)
//   }

// }

// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4

// for (let i = start; i <= end; i++) {
//   console.log(i)
//   for (let j = breaker; j <= breaker + breaker; j += breaker) {
//     console.log(`-- ${j}`);
// }
// }

// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index)
//   index -= jump
//   if (index === jump) break;
// }

// // Output
// // 10
// // 8
// // 6
// // 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
/*
    Output:
        "1 => Sayed"
        "2 => Eman"
        "3 => Mahmoud"
        "4 => Osama"
        "5 => Sameh"
*/
// let counter = +false;
// for (let i = counter; i < friends.length; i++) {
//   if (!friends[i].toLowerCase().startsWith(letter)) {
//     console.log(`${++counter} => ${friends[i]}`);
//   }
// }

// let start = 0;
// let swappedName = "elZerO";
// let newWord = []

// for (i=start; i<swappedName.length; i++) {
//   if (swappedName[i] == swappedName[i].toLowerCase()) {
//       newWord[i] = swappedName[i].toUpperCase();
//   }
//   else {
//     newWord[i] = swappedName[i].toLowerCase();
//   }
// }

// console.log(newWord.join("").toString());

// Output
// "ELzERo"

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start.toString().length; i < mix.length; i++) {
//   if (typeof mix[i] === "string") {
//     continue;
//   }
//   console.log(mix[i]);
// }

// Output
// 2
// 3
// 4
