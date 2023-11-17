let myRequest = new XMLHttpRequest();
myRequest.open("GET", "data.json");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(myRequest.responseText);
    jsData.length = 5
    let pr = new Promise((res, rej) => {
      res();
    });
    pr.then((res) => {
      for (let i = 0; i < jsData.length; i++) {
        let d = document.createElement("div")
        document.body.appendChild(d)
        let h3 = document.createElement("h3")
        h3.textContent = jsData[i].title
        d.appendChild(h3)
        let p = document.createElement("p")
        p.textContent=jsData[i].description
        d.appendChild(p)
      }
    });
  }
};

async function fetchData(){
  try {
    let myData = await fetch("data.json")
    const data = await myData.json()
    data.length = 5
    for (let i = 0; i < data.length; i++) {
      let d = document.createElement("div")
      document.body.appendChild(d)
      let h3 = document.createElement("h3")
      h3.textContent = data[i].title
      d.appendChild(h3)
      let p = document.createElement("p")
      p.textContent=data[i].description
      d.appendChild(p)
    }
  } catch(err) {
    console.log("NO Data Found");
  }
}

fetchData()


// async function getData(jsonLink) {
//   try {
//       const response = await fetch(jsonLink);
//       const data = await response.json();
//       data.length = 5;
//       for (let i = 0; i < data.length; i++) {
//           let div = document.createElement("div");

//           let h3 = document.createElement("h3");
//           h3.innerHTML = data[i].title;
//           div.appendChild(h3);

//           let p = document.createElement("p");
//           p.innerHTML = data[i].description;
//           div.appendChild(p);

//           document.body.appendChild(div);
//       }
//   } catch (error) {
//       document.body.appendChild(document.createTextNode(error));
//   }
// }
// getData("data.json");
