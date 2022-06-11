const editItem = (event) => {
  const item = event.target;

  if (item.classList[0] === 'edit-button') {
    const previousSibling = item;
    const previousPreviousSibling = previousSibling.previousSibling.previousSibling;

    previousPreviousSibling.removeAttribute('readonly');
    previousPreviousSibling.focus();
    previousPreviousSibling.classList.toggle('focus');

    previousPreviousSibling.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        previousPreviousSibling.setAttribute('readonly', 'readonly');
        previousPreviousSibling.classList.toggle('focus');

        const storage = JSON.parse(localStorage.getItem('list'));
        const items = [...document.querySelectorAll('.item')];

        for (let i = 0; i < items.length; i += 1) {
          storage[i].description = items[i].value;
        }
        localStorage.setItem('list', JSON.stringify(storage));
      }
    });
  }
};

export default editItem;
