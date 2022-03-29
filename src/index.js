/* eslint-disable */
import _, { indexOf } from "lodash";
/* eslint-enable */

import "./style.css";

const addBtn = document.querySelector("#add");
const listContainer = document.querySelector("#list");
const inputText = document.getElementById("add-list");
const regex = /^\s+$/;

window.addEventListener("DOMContentLoaded", getListItems);
addBtn.addEventListener("click", addList);
listContainer.addEventListener("click", deleteItem);
listContainer.addEventListener("click", editItem);

function addList(event) {
  event.preventDefault();
  if (inputText.value.length === 0 || inputText.value.match(regex)) {
    return;
  }

  const storage = JSON.parse(localStorage.getItem("list")) || [];

  let object = {
    description: inputText.value,
    completed: false,
    index: storage.length + 1,
  };

  storage.push(object);

  const div = document.createElement("div");
  div.classList.add("todo");

  const listItem = document.createElement("input");
  listItem.type = "text";
  listItem.setAttribute("readonly", "readonly");
  listItem.value = inputText.value;

  listItem.classList.add("item");

  saveToLocalStorage(inputText.value);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete");

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("delete-button");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("type", "button");
  editBtn.classList.add("edit-button");

  div.appendChild(checkbox);
  div.appendChild(listItem);
  div.appendChild(deleteBtn);
  div.appendChild(editBtn);

  listContainer.appendChild(div);

  localStorage.setItem("list", JSON.stringify(storage));

  inputText.value = "";
}

function deleteItem(event) {
  const item = event.target;

  if (item.classList[0] === "delete-button") {
    const parentItem = item.parentElement;
    parentItem.remove();
    removeFromLocalStorage(event);
  }
  if (item.classList[0] === "complete") {
    const siblingItem = item.nextElementSibling;
    siblingItem.classList.toggle("completed");

    const nextSibling = siblingItem.nextElementSibling;
    nextSibling.classList.toggle("hide");

    const nextNextSibling = nextSibling.nextElementSibling;
    nextNextSibling.classList.toggle("hide");
  }
}

function editItem(event) {
  const item = event.target;

  if (item.classList[0] === "edit-button") {
    const previousSibling = item.previousSibling;
    const previousPreviousSibling = previousSibling.previousSibling;

    previousPreviousSibling.removeAttribute("readonly");
    previousPreviousSibling.focus();
    previousPreviousSibling.classList.toggle("focus");

    previousPreviousSibling.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        previousPreviousSibling.setAttribute("readonly", "readonly");
        previousPreviousSibling.classList.toggle("focus");

        const storage = JSON.parse(localStorage.getItem("list"));
        const items = [...document.querySelectorAll(".item")];

        for (let i = 0; i < items.length; i += 1) {
          storage[i].description = items[i].value;
        }
        localStorage.setItem("list", JSON.stringify(storage));
      }
    });
  }
}

function saveToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("list") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("list"));
  }
  tasks.push(task);
  localStorage.setItem("list", JSON.stringify(tasks));
}

function getListItems() {
  let tasks;

  if (localStorage.getItem("list") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("list"));
  }
  tasks.forEach(function (task) {
    const div = document.createElement("div");
    div.classList.add("todo");

    const listItem = document.createElement("input");
    listItem.type = "text";
    listItem.setAttribute("readonly", "readonly");
    listItem.value = task.description;
    listItem.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("complete");

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("delete-button");

    const editBtn = document.createElement("button");
    editBtn.setAttribute("type", "button");
    editBtn.classList.add("edit-button");

    div.appendChild(checkbox);
    div.appendChild(listItem);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);

    listContainer.appendChild(div);
  });
}

function removeFromLocalStorage(event) {
  let tasks;

  if (localStorage.getItem("list") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("list"));
  }

  const previousItem = event.target.previousSibling.value;

  for (let i = 0; i < tasks.length; i += 1) {
    if (previousItem === tasks[i].description) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("list", JSON.stringify(tasks));

  const newStorage = JSON.parse(localStorage.getItem("list"));

  for (let j = 0; j < newStorage.length; j += 1) {
    newStorage[j].index = j + 1;
  }

  localStorage.setItem("list", JSON.stringify(newStorage));
}
