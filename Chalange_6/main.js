let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, counter + zero.toString().length).reverse()); // Output => ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(zero.toString().length, counter).reverse()); // Output => ["Elham", "Mazero"]

console.log(my[2][0]+my[2][1]+my[1][2]+my[1][3]+my[1][4]+my[1][5]); // "Elzero"

console.log(my[5][4]+my[3][0]); // "rO"
