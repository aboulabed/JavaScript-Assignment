// Assi 1
// class Car {
//   constructor(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   run = function () {
//     return `Car Is Running Now`;
//   };
//   stop = function(){
//     return `Car Is Stopped`
//   }
// }

// let carOne = new Car("MG", "2022", 420000)
// let carTwo = new Car("Two", "BM", 15000)
// let carThree = new Car("Three", "MW", 40000)

// console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
// console.log(carOne.run());
// // Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");

// Assi 2
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// // Write Tablet Class Here

// class Tablet extends Phone {
//   constructor(name, serial, pric, size) {
//     super(name, serial, pric);
//     this.s = size;
//   }
//   fullDetails = function () {
//     if (this.s === undefined) {
//       return `${this.name} Serial is ${this.serial} And Size Is Unkown`;
//     }
//     return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`;
//   };
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown
// Assi 3
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  creditcard() {
    return this.#c.toString().match(/\d{4}/gi).join("-");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.creditcard()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
// Assi 4
// // Write Your Code Here
// String.prototype.addLove = function(){
//   return `I Love ${this} Web School`
// }
// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
// Assi 5
// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// // Write Your Code Here
// Object.defineProperties(myObj, {
//   id: {
//       enumerable: false, // Will not appear in loop
//   },
//   score: {
//       writable: false, // Value cannot be changed
//   },
//   country: {
//       enumerable: false, // Will not appear in loop
//       configurable: true, // Can be deleted, it is true by default because "country" was manually added in object and not by defineProperty so no need to write it
//   },
// });
// delete myObj.country
// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// // Needed Output

// // "username => Elzero"
// // "score => 1000"
// // {username: 'Elzero', score: 1000, id: 100}
