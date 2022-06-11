import "./style.css";

import getListItems from "../modules/get-list.js";

import addList from "../modules/create-list.js";

import deleteItem from "../modules/delete-list.js";

import editItem from "../modules/edit-list.js";

import checkItem from "../modules/checkbox.js";

import deleteCompleted from "../modules/clear-all-completed.js";

const addBtn = document.querySelector("#add");
const clearAllCompleted = document.getElementById("clear-all");
const listContainer = document.querySelector("#list");
const inputText = document.getElementById("add-list");

window.addEventListener("DOMContentLoaded", getListItems);
addBtn.addEventListener("click", () => {
  addList(inputText);
});
clearAllCompleted.addEventListener("click", deleteCompleted);
listContainer.addEventListener("click", deleteItem);
listContainer.addEventListener("click", editItem);
listContainer.addEventListener("change", checkItem);

export default listContainer;
