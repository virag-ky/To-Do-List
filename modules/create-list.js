const listContainer = document.querySelector("#list");

const listObjects = [
  {
    description: "finish project",
    completed: false,
    index: 0,
  },
  {
    description: "go for a walk",
    completed: false,
    index: 1,
  },
  {
    description: "cook dinner",
    completed: false,
    index: 2,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < listObjects.length; i += 1) {
    const listItem = document.createElement("div");
    listItem.setAttribute("class", "item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.id = "id";
    checkbox.value = "value";

    const label = document.createElement("label");
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(listObjects[i].description));

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    listContainer.appendChild(listItem);
  }
});
