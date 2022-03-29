import { removeFromLocalStorage } from './storage.js';

const deleteItem = (event) => {
  const item = event.target;

  if (item.classList[0] === 'delete-button') {
    const parentItem = item.parentElement;
    parentItem.remove();
    removeFromLocalStorage(event);
  }
  if (item.classList[0] === 'complete') {
    const siblingItem = item.nextElementSibling;
    siblingItem.classList.toggle('completed');

    const nextSibling = siblingItem.nextElementSibling;
    nextSibling.classList.toggle('hide');

    const nextNextSibling = nextSibling.nextElementSibling;
    nextNextSibling.classList.toggle('hide');
  }
};

export default deleteItem;
