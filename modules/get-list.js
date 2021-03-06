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
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.setAttribute('type', 'button');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-button');

    if (task.completed === true) {
      checkbox.setAttribute('checked', 'checked');
      listItem.classList.toggle('completed');
      deleteBtn.classList.toggle('hide');
      editBtn.classList.toggle('hide');
    }

    div.appendChild(checkbox);
    div.appendChild(listItem);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);

    listContainer.appendChild(div);
  });
};

export default getListItems;
