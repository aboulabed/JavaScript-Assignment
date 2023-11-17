function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.substr(0, 5);
    let lName = zName.substr(6, 1);
    return `Hello ${fName}${lName}.`;
  }
  function ageWithMessage(zAge) {
    let age = zAge.substr(0, 2);
    return `Your Age Is ${age}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    let cu = zCountry.substr(0, 2).toUpperCase();
    return `You Live In ${cu}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

function checker(zName) {
  return (status) => (salary) =>
    status === "Available"
      ? `${zName}, My Salary Is ${salary}`
      : `Iam Not Avaialble`;
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
  let result = 0;
  for (i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      result += data[i];
    } else if (!isNaN(parseInt(data[i].slice(0,2))) ){
      result += +data[i].slice(0,2)
    }
  }
  if (result === 0) {
    result = `All Is Strings`
  }
  return `${result}`
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
