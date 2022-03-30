import { removeFromLocalStorage } from "./storage.js";

const deleteItem = (event) => {
  const item = event.target;

  if (item.classList[0] === "delete-button") {
    const parentItem = item.parentElement;
    parentItem.remove();
    removeFromLocalStorage(event);
  }
};

export default deleteItem;
