import { removeFromLocalStorage } from './storage.js';

const deleteItem = (event) => {
  const item = event.target;

  if (item.classList[1] === 'fa-times') {
    const parentItem = item.parentElement.parentElement;
    parentItem.remove();
    removeFromLocalStorage(event);
  }
};

export default deleteItem;
