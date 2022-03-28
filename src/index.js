/* eslint-disable */
import _, { indexOf } from "lodash";
/* eslint-enable */

import "./style.css";

const addBtn = document.querySelector("#add");
const updateBtn = document.querySelector("#update");
const listContainer = document.querySelector("#list");
const inputText = document.getElementById("add-list");
const regex = /^\s+$/;

let storage = JSON.parse(localStorage.getItem("list")) || [];

window.addEventListener("DOMContentLoaded", addList());

function setObjects(description, completed) {
  let object = {};
  object.description = description;
  object.completed = completed;
  object.index = storage.length + 1;
  storage.push(object);

  localStorage.setItem("list", JSON.stringify(storage));
}

function addList() {
  listContainer.innerHTML = "";
  for (let i = 0; i < storage.length; i += 1) {
    const listItem = document.createElement("div");
    listItem.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.id = "id";
    checkbox.value = "value";

    const label = document.createElement("label");
    label.htmlFor = "id";
    label.classList.add("label");
    const text = document.createTextNode(storage[i].description);
    label.appendChild(text);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("delete-button");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("type", "button");
    editBtn.classList.add("edit-button");

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    listContainer.appendChild(listItem);
  }
}

function deleteList() {
  const deleteButton = [...document.querySelectorAll(".delete-button")];
  const listItems = [...document.querySelectorAll(".item")];

  deleteButton.forEach((button) =>
    button.addEventListener("click", (e) => {
      e.preventDefault();
      storage.splice(1, 1);
      listContainer.innerHTML = "";
      addList();
    })
  );
}

deleteList();

addBtn.addEventListener("click", () => {
  if (inputText.value.length === 0 || inputText.value.match(regex)) {
    return;
  } else {
    setObjects(inputText.value, false);
    addList();
    deleteList();
    inputText.value = "";
  }
});

// function editList() {
//   const editButton = [...document.querySelectorAll(".edit-button")];
//   const textLabel = [...document.querySelectorAll("label")];

//   for (let k = 0; k < editButton.length; k += 1) {
//     editButton[k].addEventListener("click", () => {
//       addBtn.classList.toggle("hide");
//       updateBtn.classList.toggle("show");
//       inputText.value = textLabel[k].textContent;
//       updateBtn.addEventListener("click", () => {
//         updateBtn.classList.toggle("show");
//         addBtn.classList.toggle("hide");
//         textLabel[k].textContent = inputText.value;
//         inputText.value = "";
//       });
//     });
//   }
