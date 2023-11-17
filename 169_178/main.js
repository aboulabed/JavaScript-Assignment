let myReq = new XMLHttpRequest();
myReq.open("GET", "articles.json");
myReq.send();
myReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    let mainData = JSON.parse(this.responseText);
    let div = document.createElement("div");
    div.id = "data";
    document.body.prepend(div);
    for (i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
      let innerDiv = document.createElement("div")
      div.appendChild(innerDiv)
      let title = document.createElement("h2")
      title.textContent = `${mainData[i].title}`
      innerDiv.appendChild(title)
      let p1 = document.createElement("p")
      p1.textContent = `${mainData[i].body}`
      innerDiv.appendChild(p1)
      let p2 = document.createElement("p")
      p2.textContent = `Author: ${mainData[i].author}`
      innerDiv.appendChild(p2)
      let p3 = document.createElement("p")
      p3.textContent = `${mainData[i].category}`
      innerDiv.appendChild(p3)
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    
  }
};
myReq.onloadend = function () {
  console.log("Data Loaded");
};

// console.log(mainData);
