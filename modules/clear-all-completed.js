import getListItems from "./get-list";
import listContainer from "../src/index.js";

const deleteCompleted = () => {
  const storage = JSON.parse(localStorage.getItem("list"));

  const newStorage = storage.filter((item) => {
    return item.completed === false;
  });

  localStorage.setItem("list", JSON.stringify(newStorage));

  listContainer.innerHTML = "";
  getListItems();

  const filteredStorage = JSON.parse(localStorage.getItem("list"));

  for (let i = 0; i < filteredStorage.length; i += 1) {
    filteredStorage[i].index = i + 1;
  }
  localStorage.setItem("list", JSON.stringify(filteredStorage));
};

export default deleteCompleted;
