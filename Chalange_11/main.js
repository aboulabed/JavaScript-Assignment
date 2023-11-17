// Start Header
let crHead = document.createElement("header");
crHead.className = "website-head";
let crLogo = document.createElement("div");
crLogo.className = "logo";
crLogo.title = "Website Logo";
crLogo.textContent = "Elzero";
let crUl = document.createElement("ul");
crUl.className = "menu";
let fLI = document.createElement("li");
fLI.textContent = "Home";
let sLI = document.createElement("li");
sLI.textContent = "About";
let tLI = document.createElement("li");
tLI.textContent = "Service";
let foLI = document.createElement("li");
foLI.textContent = "Contact";
// End Header
// Start Content

let crContent = document.createElement("div");
crContent.className = "content";
for (let i = 1; i <= 15; i++) {
  let crPro = document.createElement("div");
  crPro.className = "product";
  crContent.appendChild(crPro);
  let spa = document.createElement("span");
  spa.textContent = `${i}`;
  spa.style.cssText = `font-size: 40px;color: black;font-weight: normal;display: block;margin-bottom: 10px;margin-top: 10px;`;
  crPro.appendChild(spa);
  let t = document.createTextNode("Product")
  crPro.appendChild(t)
  crPro.style.cssText = `padding: 20px;background-color: rgb(255,255,255);border: 1px solid rgb(221,221,221);width: calc((100% - 40px) / 3);box-sizing: border-box;text-align: center;color: rgb(136,136,136);border-radius: 6px;`;
  
}
// End Content
// Start Footer
let foter = document.createElement("footer")
foter.textContent = "Copyright 2023"
foter.className = "footer"
// End Footer
// Start Appending
document.body.prepend(foter)
document.body.prepend(crContent);
document.body.prepend(crHead);
crHead.appendChild(crLogo);
crHead.appendChild(crUl);
crUl.appendChild(fLI);
crUl.appendChild(sLI);
crUl.appendChild(tLI);
crUl.appendChild(foLI);
// End Appending
// Start Css
document.body.style.cssText = `margin : 0px; background-color:rgb(236, 236, 236);font-family: Tahoma, Arial;`;
crHead.style.cssText = `display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;`;
crLogo.style.cssText = `font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;`;
crUl.style.cssText = `padding: 0px; margin: 0px; display: flex; list-style:none;`;

foLI.style.cssText = `color: #666; padding: 5px 10px;`;
tLI.style.cssText = `color: #666; padding: 5px 10px;`;
sLI.style.cssText = `color: #666; padding: 5px 10px;`;
fLI.style.cssText = `color: #666; padding: 5px 10px;`;
crContent.style.cssText = `display: flex;padding: 20px;flex-wrap: wrap;justify-content: center;gap: 20px;box-sizing: border-box;min-height: calc(100vh - 142px);`;
foter.style.cssText = `background-color: rgb(35,169,110);font-size: 26px;text-align: center;padding: 20px;color: rgb(255,255,255);`

// End Css
