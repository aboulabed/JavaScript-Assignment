let userName = "Elzero";

console.log(userName[0].toLowerCase()); // Output => e
console.log(userName.toLowerCase().slice(0, 1)); // Output => e
console.log(userName.toLowerCase().substring(0, 1)); // Output => e
console.log(userName.toLowerCase().substring(-5, 1)); // Output => e
console.log(userName.toLowerCase().substr(0, 1)); // Output => e
console.log(userName.toLowerCase().charAt(0).repeat(3)); // Output => eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toUpperCase().includes(letterZ.toUpperCase())); // Output => True
console.log(word.startsWith(letterE.toUpperCase())); // Output => True
console.log(word.endsWith(letterO.toLowerCase())); // Output => True