import { saveToLocalStorage } from "./storage.js";

const addList = (inputText) => {
  const regex = /^\s+$/;

  if (inputText.value.length === 0 || inputText.value.match(regex)) {
    return;
  }

  const storage = JSON.parse(localStorage.getItem("list")) || [];

  const object = {
    description: inputText.value.trim(),
    completed: false,
    index: storage.length + 1,
  };

  storage.push(object);

  const div = document.createElement("div");
  div.classList.add("todo");

  const listItem = document.createElement("input");
  listItem.type = "text";
  listItem.setAttribute("readonly", "readonly");
  listItem.value = inputText.value.trim();

  listItem.classList.add("item");

  saveToLocalStorage(inputText.value.trim());

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete");

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("delete-button");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("type", "button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-button");

  div.appendChild(checkbox);
  div.appendChild(listItem);
  div.appendChild(deleteBtn);
  div.appendChild(editBtn);

  const listContainer = document.querySelector("#list");

  listContainer.appendChild(div);

  localStorage.setItem("list", JSON.stringify(storage));
};

export default addList;
