// let meth1 = document.getElementById("elzero");
// let meth2 = document.getElementsByTagName("div");
// let meth3 = document.getElementsByClassName("element");
// let meth4 = document.getElementsByName("js");
// let meth5 = document.querySelector("#elzero");
// let meth6 = document.querySelector(".element");
// let meth7 = document.querySelectorAll("div");
// let meth8 = document.querySelectorAll("#elzero");
// let meth9 = document.body.firstElementChild;
// let meth10 = document.body.children[0];
// let meth11 = document.body.childNodes[1];
// let meth12 = document.querySelector("body div");
// let meth13 = document.querySelector('[name = "js"]');
// let meth14 = document.querySelectorAll('[name = "js"]');
// let meth15 = document.querySelector("div");
// console.log(meth1);
// console.log(meth2[0]);
// console.log(meth3[0]);
// console.log(meth4[0]);
// console.log(meth5);
// console.log(meth6);
// console.log(meth7[0]);
// console.log(meth8[0]);
// console.log(meth9);
// console.log(meth10);
// console.log(meth11);
// console.log(meth12);
// console.log(meth13);
// console.log(meth14[0]);
// console.log(meth15);

// for (i = 0; i < document.images.length; i++) {
//   document.images[i].src =
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   document.images[i].alt = "Elzero Logo";
// }

// let dollarInput = document.querySelector("[name='dollar']");
// let result = document.querySelector(".result");

// dollarInput.addEventListener("input", () => {
//   if (dollarInput.value !== "" && dollarInput.value > 0) {
//     let eG = dollarInput.value * 15.6;
//     result.textContent = `{${dollarInput.value}} USD Dollar = {${eG.toFixed(
//       2
//     )}} Egyptian Pound`;
//   }
// });

// let img = document.images;
// for (i = 0; i < img.length; i++) {
//   if (img[i].alt !== "") {
//     img[i].alt = "Old";
//   } else if (img[i].alt === "") {
//     img[i].alt = "Elzero New";
//   }
// }

// let one = document.querySelector(".one")
// let two = document.querySelector(".two")

// one.title = "one"
// two.title = "two"

// let textone = one.textContent
// let texttwo = two.textContent

// one.textContent = texttwo
// two.textContent = `${textone} ${++two.childNodes.length}`

let app = () => {
	let form = document.forms[0];
	let numOfElements = document.querySelector("form input[type='number']");
	let text = document.querySelector("form input[type='text']");
	let type = document.querySelector("form select");
	let result = document.querySelector("form .results");

	form.onsubmit = (event) => {
		// Prevent the default act for a form when submit it (refresh and empty the fields).
		event.preventDefault();

		// Remove all childs of the result element.
		document.querySelectorAll(".results .box").forEach((box) => box.remove());

		if (numOfElements.value !== "" && text.value.trim() !== "") {
			if (numOfElements.value > 0) {
				for (let i = 0; i < numOfElements.value; i++) {
					let box = document.createElement(type.value);
					box.className = "box";
					box.title = "Element";
					box.id = `id-${i + 1}`;
					let boxText = document.createTextNode(text.value);

					box.appendChild(boxText);
					result.appendChild(box);
				}
			} else alert("Number Of Elements Should Be Greater Than 0");
		} else alert("Please fill in all the required fields.");
	};
};

app();

