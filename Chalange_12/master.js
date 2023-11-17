let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.length !== 0) {
    let task = document.createElement("div");
    task.className = "task";
    // task.setAttribute("data-id", task.id);
    tasksDiv.appendChild(task);
    task.textContent = input.value;
    let sp = document.createElement("span");
    sp.className = "del";
    sp.textContent = "delete";
    task.appendChild(sp);
    sp.addEventListener("click", function () {
      sp.parentElement.remove();

    });
    
  }
  
  input.value = "";
});

