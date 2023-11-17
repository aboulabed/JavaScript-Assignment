let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .map(function (elem) {
    return isNaN(parseInt(elem)) && elem !== "," ? elem : "";
  })
  .filter(function (ele) {
    return ele !== "_";
  })
  .reduce(function (acc, curent) {
    return curent === curent.toLowerCase()
      ? `${acc}${curent}`
      : `${acc} ${curent}`;
  })
  .trim()
  .slice(true, length - true)
  .trim();
// .reduce(function (acc, curent) {
//   return curent == "_" ? `${acc}${curent}` : `${acc} ${curent}`;
// });

console.log(solution); // ELzero Web Scool
