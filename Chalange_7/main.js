/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<div>We Have X Admins</div>`);
let finalAdmins = [];
let counter = 1;

if (myAdmins.includes("Stop")) {
  for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
    finalAdmins.push(myAdmins[i]);
  }
} else {
  finalAdmins = myAdmins;
}

document.write(`<div>We Have <span>${finalAdmins.length}</span> Admins</div>`);
document.write(`<hr />`);

for (let i = 0; i < finalAdmins.length; i++) {
  document.write(
    `<div>The Admin For Team <span>${i + 1}</span> is <span>${
      finalAdmins.sort()[i]
    }</span></div>`
  );
  document.write(`<h3>Team Members:</h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees.sort()[j][0] === finalAdmins[i][0]) {
      document.write(`<p>- ${counter} ${myEmployees.sort()[j]}</p>`);
      counter++;
    }
  }

  counter = 1;
  document.write(`<hr />`);
}
