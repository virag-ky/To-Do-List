const listContainer = document.querySelector('#list');

const getListItems = () => {
  let tasks;

  if (localStorage.getItem('list') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('list'));
  }
  tasks.forEach((task) => {
    const div = document.createElement('div');
    div.classList.add('todo');

    const listItem = document.createElement('input');
    listItem.type = 'text';
    listItem.setAttribute('readonly', 'readonly');
    listItem.value = task.description;
    listItem.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('complete');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.classList.add('delete-button');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.classList.add('edit-button');

    div.appendChild(checkbox);
    div.appendChild(listItem);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);

    listContainer.appendChild(div);
  });
};

export default getListItems;
