// let setOfNumbers = new Set().add(10)
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers);
// let setOfNumbersSpread = [...setOfNumbers]
// console.log(setOfNumbersSpread[setOfNumbers.size - 1]);
// Assi 1

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let s = Array.from(new Set(myFriends)).sort()
// console.log(s);

// // Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// Assi 2

// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let k = Object.keys(myInfo)
// let v = Object.values(myInfo)
// let map = new Map()
// map.set(k[0],v[0])
// map.set(k[1],v[1])
// map.set(k[2],v[2])
// console.log(map)
// console.log(map.size);
// console.log(map.has('role'));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// Assi 3
// let theNumber = 100020003000;
// let n = Array.from(new Set(Array.from(`${theNumber}`))).sort().join("")
// console.log(+n);

// Assi 4
// let theName = "Elzero";
// let f = Array.from(theName)
// let a = [...new Set(theName)]
// let th = [...theName]
// let fo = theName.split("")
// let fif = []
// for(i = 0;i < theName.length; i++){
//   fif.push(theName[i])
// }
// console.log(f);
// console.log(a);
// console.log(th);
// console.log(fo);
// console.log(fif);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
// Assi 5
let arrayOne = ["A", "B", "C", "D", "E", 10, 15, 6];
assignmentSix(arrayOne);
// Output => ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let arrayTwo = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
assignmentSix(arrayTwo);
// Output => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let arrayThree = ["Z", "Y", "A", "D", "E", 10, 1];
assignmentSix(arrayThree);
// Output => ["Z", "Y", "Z", "Y", "A", "D", "E"]

function assignmentSix(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arr.unshift(...arr.splice(i, 1));
    }
  }
  console.log(arr);
  const firstLetterIndex = arr.findIndex((ele) => typeof ele === "string");
  arr = arr.copyWithin(0, firstLetterIndex, firstLetterIndex * 2);
  console.log(arr);
}
// let q = [];
// let ii = 0;
// chars.sort();
// for (i = 0; i < chars.length; i++) {
//   if (typeof chars[i] === "number") {
//     ii += 1;
//     q.push(chars[i]);
//   }

// }
// chars = chars.slice(q.length, chars.length);

// s = chars.slice(0, ii);
// ch = [...s,...chars]
// console.log(ch);

// Assi 6
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let First = [...numsOne, ...numsTwo];
// let Socened = [];
// let Third = numsOne.concat(numsTwo);
// Socened.push(...numsOne, ...numsTwo);

// console.log(First);
// console.log(Socened);
// console.log(Third);
// Assi 7
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(Math.max(...n2) * (Math.min(...n2) - n2.length));
// console.log([...n1, ...n2].length * Math.max(...n2));
// Assi 8
