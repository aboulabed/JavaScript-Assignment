// for (let i = 0; i < document.links.length; i++) {
//   if (document.links[i].classList.contains("open") && document.links[i].textContent == "Elzero") {
//     console.log(document.links[i]);
//   }
// }

// let addInput = document.querySelector('[placeholder="Add Classes"]');
// let removeInput = document.querySelector('[placeholder="Remove Classes"]');
// let res = document.querySelector(".classes-list div");
// let Current = document.querySelector('[title="Current"]');
// let sp = document.querySelectorAll(".classes-list span");

// function addRem() {
//   document.querySelectorAll("span").forEach((ele) => ele.remove());

//   for (let i = 0; i < this.value.trim().split(" ").length; i++) {
//     if (addInput.value)
//       res.classList.add(addInput.value.toLowerCase().trim().split(" ")[i]);
//     if (removeInput.value)
//       res.classList.remove(
//         removeInput.value.toLowerCase().trim().split(" ")[i]
//       );
//   }
//   this.value = "";

//   if (res.classList.length) {
//     [...res.classList].sort().forEach((ele) => {
//       let clasSpan = document.createElement("span");
//       clasSpan.textContent = ele;
//       res.append(clasSpan);
//     });
//   } else {
//     clasSpan.textContent = "No Classes To Show";
//   }
// }

// addInput.onblur = addRem;
// removeInput.onblur = addRem;

// let div = document.querySelector(".our-element")
// let str = document.createElement("div")
// let end = document.createElement("div")
// str.className = "start"
// str.title = "start"
// str.setAttribute("data-value", "start")
// end.className = "end"
// end.title = "end"
// end.setAttribute("data-value", "end")
// div.nextElementSibling.remove()
// div.before(str)
// div.after(end)

// let d = document.querySelector("div")

// let f = d.lastChild

// console.log(f.textContent.trim())

[...document.body.children].forEach(el => (el.onclick = _ => console.log(`This Is ${el.tagName}`)));
