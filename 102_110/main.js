// let prop = window.prompt("Print Number From – To", "Example: 5-20");
// let i = prop.charAt(prop.indexOf("-"));
// let j = prop.length - 1;

// let f = prop.slice(0, prop.indexOf(i));
// let s = prop.slice(prop.indexOf(i) + 1, j + 1);

// if (+f > +s) {
//   for (let i = +s; i < +f + 1; i++) {
//     console.log(i)
//   }
// } else if (+s > +f){
//   for (let i = +f; i < +s + 1; i++) {
//     console.log(i)
//   }
// }

// Assi 1

// setTimeout(function () {
//   let div = document.createElement("div");
//   div.style.cssText = `width: 400px;
//   height: 200px;
//   background-color: #ddd;
//   margin: 20px auto;
//   position: relative;`;
//   let h3 = document.createElement("h3");
//   h3.textContent = "Welcome";
//   h3.style.cssText = `text-align: center;
//   padding: 50px 0 0 0;`;
//   div.appendChild(h3);
//   let p = document.createElement("p");
//   p.textContent = "Welcom To Elzero";
//   p.style.cssText = `font-size: 20px;
//   text-align: center;
//   padding: 10px 0;`;
//   div.appendChild(p);
//   let i = document.createElement("btn");
//   i.style.cssText = `position: absolute;
//   background-color: red;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   border: 5px solid;
//   top: -16px;
//   right: -19px;
//   cursor: pointer`;
//   i.textContent = "C";
//   i.addEventListener('click', function(){
//     i.parentElement.remove()
//   })
//   div.appendChild(i);
//   document.body.appendChild(div);
// }, 5000);

// Assi 2
// let div = document.createElement("div");
// document.body.appendChild(div)
// div.textContent = 10
// function counter() {
//   div.innerHTML -= 1
//   if (div.innerHTML === "5"){
//     window.open("https://elzero.org", "_blank", "width=400,height=400")
//   }
//   if(div.innerHTML === "0"){
//     clearInterval(counter1)
//   }
// }

// let counter1 =  setInterval(counter, 1000)

// Assi 3,4,5