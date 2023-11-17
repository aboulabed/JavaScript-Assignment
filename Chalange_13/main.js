let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

// let {
//   title: t,
//   age: a,
//   available: av,
//   skills: [, css],
// } = myFriends;

let [{ available: av }, { available: a1 }, { available: a2 }] = myFriends;

if (av === true) {
  av = "Avalabile";
} else {
  av = "Not Avalabile";
}

if (a1 === true) {
  a1 = "Avalabile";
} else {
  a1 = "Not Avalabile";
}
if (a2 === true) {
  a2 = "Avalabile";
} else {
  a2 = "Not Avalabile";
}

if (chosen == 1) {
  let [
    {
      title: t,
      age: a,
      available,
      skills: [, css],
    },
  ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(av);
  console.log(css);
} else if (chosen == 2) {
  [
    {},
    {
      title: t,
      age: a,
      available = "Avalabile",
      skills: [, dj],
    },
  ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(a1);
  console.log(dj);
} else {
  [
    {},
    {},
    {
      title: t,
      age: a,
      available = "Avalabile",
      skills: [, la],
    },
  ] = myFriends;
  console.log(t);
  console.log(a);
  console.log(a2);
  console.log(la);
}

// If chosen === 1

("Osama");
39;
("Available");
("CSS");

// If chosen === 2

("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3

("Sayed");
33;
("Available");
("Laravel");
