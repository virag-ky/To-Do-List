/* eslint-disable */
import _, { indexOf } from "lodash";
/* eslint-enable */

import './style.css';

import getListItems from '../modules/get-list.js';

import addList from '../modules/create-list.js';

import deleteItem from '../modules/delete-list.js';

import editItem from '../modules/edit-list.js';

const addBtn = document.querySelector('#add');
const listContainer = document.querySelector('#list');

window.addEventListener('DOMContentLoaded', getListItems);
addBtn.addEventListener('click', addList);
listContainer.addEventListener('click', deleteItem);
listContainer.addEventListener('click', editItem);
