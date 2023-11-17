// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// // let assone = /\d{4}:\w{2}\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
// let assone = /(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)/ig

// console.log(ip.match(assone));

// Assi 1
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// console.log(specialNames.match(/\bOs\d*O\b/g));
// Output
// ['Os10O', 'OsO', 'Os100O']
// Assi 2
// let phone = "+(995)-123 (4567)";
// console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/ig));
// Assi 3
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// Assi 4
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\/|\s\-|\s)(\d{2}|\s\d{2})(\/|\s\-|\s)(\d{4}|\d{2}|\s\d{4})/gi; // Write Pattern Here

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"
// Assi 5

