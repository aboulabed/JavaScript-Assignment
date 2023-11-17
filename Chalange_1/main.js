let theTitle = "Hello Elzero", theDescription = "Elzero web school", theDate = `25/10`

let theContent = `
  <div class="card">
    <div class="child">
    <h3>Hello ${theTitle}</h3>
    <p>${theDescription}</p>
    <span>${theDate}</span>
    </div>
  </div>
`

document.write(`${theContent.repeat(4)}`)