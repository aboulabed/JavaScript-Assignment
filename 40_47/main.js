let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
let poped = myFriends.pop(); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

let popedd = friends.pop();
let shift = friends.shift();
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log((words[0] = "ZERO")); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack[1] === needle) {
  console.log("Found");
}

if (haystack.slice(-2, -1).toString() === needle) {
  console.log("Found");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(
  allArrs.concat(arr1, arr2).sort().slice(arr2.length).join("").toLowerCase()
); // fxy

