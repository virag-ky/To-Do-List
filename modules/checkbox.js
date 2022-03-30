const checkItem = (event) => {
  const item = event.target;
  if (item.classList[0] === "complete") {
    const nextSibling = item.nextSibling;
    nextSibling.classList.toggle("completed");

    const nextNextSibling = nextSibling.nextElementSibling;
    nextNextSibling.classList.toggle("hide");

    const lastSibling = nextNextSibling.nextSibling;
    lastSibling.classList.toggle("hide");

    const storage = JSON.parse(localStorage.getItem("list"));

    for (let i = 0; i < storage.length; i += 1) {
      if (
        nextSibling.value === storage[i].description &&
        storage[i].completed === false
      ) {
        storage[i].completed = true;
      } else if (
        nextSibling.value === storage[i].description &&
        storage[i].completed === true
      ) {
        storage[i].completed = false;
      }
      localStorage.setItem("list", JSON.stringify(storage));
    }
  }
};

export default checkItem;
