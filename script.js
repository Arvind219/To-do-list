let toDoList = document.getElementById("toDoList");
let listContainer = document.getElementById("listContainer");
let createTask = document.getElementById("createTask");
let createTask2 = document.getElementById("createTask2");
let newTask = document.getElementById("newTask");
let addTask = document.getElementById("addTask"); // Submit Button
let back = document.getElementById("back");
let taskInput = document.getElementById("taskInput");
let dateInput = document.getElementById("dateInput");
let timeInput = document.getElementById("timeInput");
let taskForm = document.getElementById("taskForm"); // Form


const createToDo = () => {
  toDoList.classList.toggle("hide");
  newTask.classList.toggle("hide");
}

const addToDo = (e) => {
  e.preventDefault()
  toDoList.classList.toggle("hide");
  newTask.classList.toggle("hide");

  let li = document.createElement("li")
  li.innerHTML = `&nbsp; &nbsp; &nbsp; ${taskInput.value} <br> ${timeInput.value} ${dateInput.value} `
  listContainer.appendChild(li)
  let span = document.createElement("span")
  span.innerHTML = "\u00d7"
  li.appendChild(span)

  taskInput.value = ""
  dateInput.value = ""
  timeInput.value = ""
  saveData()
}

listContainer.addEventListener('click', function(e) {
  console.log("testing")
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
}, false)

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data")
}

showList()

createTask.addEventListener('click', createToDo);
createTask2.addEventListener('click', createToDo);
back.addEventListener('click', createToDo);
taskForm.addEventListener('submit', addToDo);

// createToDo()

