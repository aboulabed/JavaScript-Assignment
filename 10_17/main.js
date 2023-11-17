let numberOne = 10
let numberTwo = 20


// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

/* `I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""`` */

console.log("`I'm In \\\\ Love \\\\ \"\"\" \'\'\' \+\+ With \+\+ \\\"\"\"\\\"\"\" \"\"JavaScript\"\" \`\` ")

let a = 21;
let b = 20;

let numberFour = Math.ceil(a / b) + !false + true;
console.log("_" + `${a}_${b}`.repeat(numberFour) + "_")