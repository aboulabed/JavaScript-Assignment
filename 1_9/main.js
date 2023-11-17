
// <---Q1--->
/* this code won't work because the element is not loaded in the page yet */
/* this code will work because the element is loaded in the page */
/* this code will work because the element is loaded in the page */
// <---Q1--->

// <---Q2--->
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";

// Second Solution

document.querySelector("h1").style.cssText =
  "color: blue; font-size: 80px; font-family: Arial; font-weight: bold; text-align: center;";
// <---Q2--->

// <---Q3--->
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-weight: bold; font-size: 40px",
  "color: white; background-color: blue; font-size: 40px"
);
// <---Q3--->

// <---Q4--->
console.group("Group 1");
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd("Grand Child Group");
console.groupEnd("Child Group");
console.groupEnd("Group 1");

console.group("Group 2");
console.log("Message One");
console.log("Message Two");

console.groupEnd("Group 2");
// <---Q4--->

// <---Q5--->
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
// <---Q5--->

// <---Q6--->
// First Method:-
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

// Second Method:-
// console.log("Iam In Console");
// document.write("Iam In Page");
// <---Q6--->
