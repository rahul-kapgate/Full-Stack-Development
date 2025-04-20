let inputTodo = document.querySelector("#todoinput");
let addtodoBtn = document.querySelector("#addbtn");
let todolist = document.querySelector("#todolist");

// Add event listeners to existing checkboxes
document
  .querySelectorAll("#todolist input[type='checkbox']")
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const label = this.nextElementSibling;
      if (this.checked) {
        label.classList.add("done");
      } else {
        label.classList.remove("done");
      }
    });
  });

function addTodo() {
  const newDiv = document.createElement("div");
  const newTodo = document.createElement("input");
  newTodo.type = "checkbox";

  const label = document.createElement("span");
  label.textContent = inputTodo.value;

  // Add checkbox event listener to toggle "done" class
  newTodo.addEventListener("change", function () {
    if (this.checked) {
      label.classList.add("done");
    } else {
      label.classList.remove("done");
    }
  });

  newDiv.appendChild(newTodo);
  newDiv.appendChild(label);
  todolist.appendChild(newDiv);

  inputTodo.value = ""; 
}

addtodoBtn.addEventListener("click", addTodo);
