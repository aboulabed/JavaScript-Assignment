// function calculate(firstNum, secondNum, operation) {
//     // Write Your Code Here
//     if (secondNum === undefined) {
//         return `Second Number Is Not Found`;
//     }
//     switch (operation) {
//         case "add":
//         default:
//             return `${firstNum + secondNum}`;
//             break;
//         case "subtract":
//             return `${firstNum - secondNum}`;
//             break;
//         case "multiply":
//             return `${firstNum * secondNum}`;
//             break;
//     }
// }
// console.log(calculate(20)); // Output => Second Number Is Not Found
// console.log(calculate(20, 30)); // Output => 50
// console.log(calculate(20, 30, "add")); // Output => 50
// console.log(calculate(20, 30, "subtract")); // Output => -10
// console.log(calculate(20, 30, "multiply")); // Output => 600




// function ageInTime(theAge) {
//     // Your Code Here
//     if (theAge < 10 || theAge > 100) {
//         console.log("Age Out Of Range")
//     } else {
//         console.log(theAge * 12)
//         console.log(theAge * 365)
//         console.log(theAge * 52)
//         console.log(theAge * 525600)
//         console.log(theAge * 31536000)
//     }

// }


// function checkStatus(a, b, c) {
//     let myInps = [a, b, c];
//     let name, age, hire;
//     for (i = 0; i < myInps.length; i++) {
//         typeof myInps[i] === "string"
//             ? (name = myInps[i])
//             : typeof myInps[i] === "number"
//             ? (age = myInps[i])
//             : typeof myInps[i] === "boolean" && myInps[i] === true
//             ? (hire = "You Are Available For Hire")
//             : typeof myInps[i] === "boolean" && myInps[i] === false
//             ? (hire = "You Are Not Available For Hire")
//             : console.log("Invalid data Input");
//     }
//     console.log(`Hello ${name} Your Age Is ${age} You Are ${hire} `)
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months



// function createSelectBox(startYear, endYear) {
//     // Write Your Code Here
//     document.write(`<select>`);
//     for (i = startYear; i <= endYear; i++) {
//         document.write(`<option value="${i}">${i}</option>`);
//     }
//     document.write(`</select>`);
// }
// createSelectBox(2000, 2021);


function multiply(...numbers) {
    // console.log(Array.isArray(numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === 'number') {
            Math.floor(numbers[i])
            result = numbers[i] * numbers[i]; // result = result + numbers[i]
        }
    }
    return numbers[i]*numbers[i];
    console.log(result)
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000