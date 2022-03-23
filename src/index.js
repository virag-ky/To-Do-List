/* eslint-disable */
import _ from "lodash";

/* eslint-enable */

import './style.css';

import listObjects from '../modules/create-list.js';

const listContainer = document.querySelector('#list');

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < listObjects.length; i += 1) {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.id = 'id';
    checkbox.value = 'value';

    const label = document.createElement('label');
    label.htmlFor = 'id';
    label.appendChild(document.createTextNode(listObjects[i].description));

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    listContainer.appendChild(listItem);
  }
});
