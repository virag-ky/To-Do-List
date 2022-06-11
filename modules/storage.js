const saveToLocalStorage = (task) => {
  let tasks;
  if (localStorage.getItem('list') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('list'));
  }
  tasks.push(task);
  localStorage.setItem('list', JSON.stringify(tasks));
};

const removeFromLocalStorage = (event) => {
  let tasks;

  if (localStorage.getItem('list') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('list'));
  }

  const previousItem = event.target.parentElement.previousSibling.value;

  for (let i = 0; i < tasks.length; i += 1) {
    if (previousItem === tasks[i].description) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('list', JSON.stringify(tasks));

  const newStorage = JSON.parse(localStorage.getItem('list'));

  for (let j = 0; j < newStorage.length; j += 1) {
    newStorage[j].index = j + 1;
  }

  localStorage.setItem('list', JSON.stringify(newStorage));
};

export { saveToLocalStorage, removeFromLocalStorage };
