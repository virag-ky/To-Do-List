/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/checkbox.js":
/*!*****************************!*\
  !*** ./modules/checkbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkItem = (event) => {\n  const item = event.target;\n  if (item.classList[0] === 'complete') {\n    const { nextSibling } = item;\n    nextSibling.classList.toggle('completed');\n\n    const nextNextSibling = nextSibling.nextElementSibling;\n    nextNextSibling.classList.toggle('hide');\n\n    const lastSibling = nextNextSibling.nextSibling;\n    lastSibling.classList.toggle('hide');\n\n    const storage = JSON.parse(localStorage.getItem('list'));\n\n    for (let i = 0; i < storage.length; i += 1) {\n      if (\n        nextSibling.value === storage[i].description\n        && storage[i].completed === false\n      ) {\n        storage[i].completed = true;\n      } else if (\n        nextSibling.value === storage[i].description\n        && storage[i].completed === true\n      ) {\n        storage[i].completed = false;\n      }\n      localStorage.setItem('list', JSON.stringify(storage));\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkItem);\n\n\n//# sourceURL=webpack://to-do-list/./modules/checkbox.js?");

/***/ }),

/***/ "./modules/clear-all-completed.js":
/*!****************************************!*\
  !*** ./modules/clear-all-completed.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-list.js */ \"./modules/get-list.js\");\n\n\nconst deleteCompleted = () => {\n  const storage = JSON.parse(localStorage.getItem('list'));\n\n  const newStorage = storage.filter((item) => item.completed === false);\n\n  localStorage.setItem('list', JSON.stringify(newStorage));\n\n  const listContainer = document.querySelector('#list');\n\n  listContainer.innerHTML = '';\n  (0,_get_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const filteredStorage = JSON.parse(localStorage.getItem('list'));\n\n  for (let i = 0; i < filteredStorage.length; i += 1) {\n    filteredStorage[i].index = i + 1;\n  }\n  localStorage.setItem('list', JSON.stringify(filteredStorage));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteCompleted);\n\n\n//# sourceURL=webpack://to-do-list/./modules/clear-all-completed.js?");

/***/ }),

/***/ "./modules/create-list.js":
/*!********************************!*\
  !*** ./modules/create-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst listContainer = document.querySelector(\"#list\");\n\nconst addList = (inputText) => {\n  const regex = /^\\s+$/;\n\n  if (inputText.value.length === 0 || inputText.value.match(regex)) {\n    return;\n  }\n\n  const storage = JSON.parse(localStorage.getItem(\"list\")) || [];\n\n  const object = {\n    description: inputText.value.trim(),\n    completed: false,\n    index: storage.length + 1,\n  };\n\n  storage.push(object);\n\n  const div = document.createElement(\"div\");\n  div.classList.add(\"todo\");\n\n  const listItem = document.createElement(\"input\");\n  listItem.type = \"text\";\n  listItem.setAttribute(\"readonly\", \"readonly\");\n  listItem.value = inputText.value.trim();\n\n  listItem.classList.add(\"item\");\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(inputText.value.trim());\n\n  const checkbox = document.createElement(\"input\");\n  checkbox.type = \"checkbox\";\n  checkbox.classList.add(\"complete\");\n\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.innerHTML = `<i class=\"fas fa-times\"></i>`;\n  deleteBtn.setAttribute(\"type\", \"button\");\n  deleteBtn.classList.add(\"delete-button\");\n\n  const editBtn = document.createElement(\"button\");\n  editBtn.setAttribute(\"type\", \"button\");\n  editBtn.textContent = \"Edit\";\n  editBtn.classList.add(\"edit-button\");\n\n  div.appendChild(checkbox);\n  div.appendChild(listItem);\n  div.appendChild(deleteBtn);\n  div.appendChild(editBtn);\n\n  listContainer.appendChild(div);\n\n  localStorage.setItem(\"list\", JSON.stringify(storage));\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/create-list.js?");

/***/ }),

/***/ "./modules/delete-list.js":
/*!********************************!*\
  !*** ./modules/delete-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst deleteItem = (event) => {\n  const item = event.target;\n\n  if (item.classList[0] === 'delete-button') {\n    const parentItem = item.parentElement;\n    parentItem.remove();\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.removeFromLocalStorage)(event);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);\n\n\n//# sourceURL=webpack://to-do-list/./modules/delete-list.js?");

/***/ }),

/***/ "./modules/edit-list.js":
/*!******************************!*\
  !*** ./modules/edit-list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editItem = (event) => {\n  const item = event.target;\n\n  if (item.classList[0] === \"edit-button\") {\n    const previousSibling = item;\n    const previousPreviousSibling = previousSibling.previousSibling;\n\n    previousPreviousSibling.removeAttribute(\"readonly\");\n    previousPreviousSibling.focus();\n    previousPreviousSibling.classList.toggle(\"focus\");\n\n    previousPreviousSibling.addEventListener(\"keyup\", (event) => {\n      if (event.keyCode === 13) {\n        previousPreviousSibling.setAttribute(\"readonly\", \"readonly\");\n        previousPreviousSibling.classList.toggle(\"focus\");\n\n        const storage = JSON.parse(localStorage.getItem(\"list\"));\n        const items = [...document.querySelectorAll(\".item\")];\n\n        for (let i = 0; i < items.length; i += 1) {\n          storage[i].description = items[i].value;\n        }\n        localStorage.setItem(\"list\", JSON.stringify(storage));\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);\n\n\n//# sourceURL=webpack://to-do-list/./modules/edit-list.js?");

/***/ }),

/***/ "./modules/get-list.js":
/*!*****************************!*\
  !*** ./modules/get-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listContainer = document.querySelector('#list');\n\nconst getListItems = () => {\n  let tasks;\n\n  if (localStorage.getItem('list') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('list'));\n  }\n  tasks.forEach((task) => {\n    const div = document.createElement('div');\n    div.classList.add('todo');\n\n    const listItem = document.createElement('input');\n    listItem.type = 'text';\n    listItem.setAttribute('readonly', 'readonly');\n    listItem.value = task.description;\n    listItem.classList.add('item');\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.classList.add('complete');\n\n    const deleteBtn = document.createElement('button');\n    deleteBtn.setAttribute('type', 'button');\n    deleteBtn.classList.add('delete-button');\n\n    const editBtn = document.createElement('button');\n    editBtn.setAttribute('type', 'button');\n    editBtn.textContent = 'Edit';\n    editBtn.classList.add('edit-button');\n\n    if (task.completed === true) {\n      checkbox.setAttribute('checked', 'checked');\n      listItem.classList.toggle('completed');\n      deleteBtn.classList.toggle('hide');\n      editBtn.classList.toggle('hide');\n    }\n\n    div.appendChild(checkbox);\n    div.appendChild(listItem);\n    div.appendChild(deleteBtn);\n    div.appendChild(editBtn);\n\n    listContainer.appendChild(div);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getListItems);\n\n\n//# sourceURL=webpack://to-do-list/./modules/get-list.js?");

/***/ }),

/***/ "./modules/storage.js":
/*!****************************!*\
  !*** ./modules/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeFromLocalStorage\": () => (/* binding */ removeFromLocalStorage),\n/* harmony export */   \"saveToLocalStorage\": () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\nconst saveToLocalStorage = (task) => {\n  let tasks;\n  if (localStorage.getItem('list') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('list'));\n  }\n  tasks.push(task);\n  localStorage.setItem('list', JSON.stringify(tasks));\n};\n\nconst removeFromLocalStorage = (event) => {\n  let tasks;\n\n  if (localStorage.getItem('list') === null) {\n    tasks = [];\n  } else {\n    tasks = JSON.parse(localStorage.getItem('list'));\n  }\n\n  const previousItem = event.target.previousSibling.value;\n\n  for (let i = 0; i < tasks.length; i += 1) {\n    if (previousItem === tasks[i].description) {\n      tasks.splice(i, 1);\n    }\n  }\n  localStorage.setItem('list', JSON.stringify(tasks));\n\n  const newStorage = JSON.parse(localStorage.getItem('list'));\n\n  for (let j = 0; j < newStorage.length; j += 1) {\n    newStorage[j].index = j + 1;\n  }\n\n  localStorage.setItem('list', JSON.stringify(newStorage));\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/storage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 80px 0;\\n  font-family: monospace, sans-serif;\\n  background: #000;\\n}\\n\\ni {\\n  color: #1495ff;\\n  font-size: 1.8rem;\\n}\\n\\nsection {\\n  border:thin solid #1495ff;\\n  width: 90%;\\n  max-width: 800px;\\n  box-shadow: 10px 10px 15px 0 #1495ff;\\n  border-radius: 5px;\\n  background-color: #0c002e;\\n}\\n\\nh2 {\\n  width: 100%;\\n  font-weight: normal;\\n  font-size: 1.8rem;\\n  border-bottom: 1px solid #1495ff;\\n  padding: 15px;\\n  color: #f65ee0;\\n}\\n\\nform {\\n  display: flex;\\n  padding: 15px;\\n  border-bottom: 1px solid #1495ff;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  width: 100%;\\n  border: none;\\n  font-size: 1.4rem;\\n  color: #0cffd2;\\n  background: #0c002e;\\n}\\n\\ninput[type=\\\"text\\\"]:focus {\\n  outline: none;\\n}\\n\\n.todo {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #1495ff;\\n  padding: 15px;\\n}\\n\\n.item {\\n  font-size: 1.1rem;\\n  font-weight: 500;\\n  list-style: none;\\n  width: 100%;\\n}\\n\\ninput[type=\\\"checkbox\\\"] {\\n  margin-right: 20px;\\n  width: 30px;\\n  height: 25px;\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  -o-appearance: none;\\n  appearance: none;\\n  outline: 2px solid #1495ff;\\n  border-radius: 3px;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:hover {\\n  cursor: pointer;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked::after {\\n  content: \\\"\\\\2713\\\";\\n  height: 100%;\\n  display: block;\\n  text-align: center;\\n  font-size: 1.4rem;\\n  font-weight: 900;\\n  color: #1495ff;\\n  border-radius: 3px;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.focus {\\n  animation: color-change 2s ease-out;\\n}\\n\\n@keyframes color-change {\\n  0% {\\n    background-color: #fff;\\n  }\\n\\n  50% {\\n    background-color: rgb(8, 253, 151);\\n  }\\n\\n  100% {\\n    background-color: #fff;\\n  }\\n}\\n\\n.label {\\n  margin-right: auto;\\n}\\n\\n.delete-button {\\n  width: 30px;\\n  margin-right: 10px;\\n  background: transparent;\\n  border: none;\\n}\\n\\n.delete-button:hover {\\n  cursor: pointer;\\n}\\n\\n.edit-button {\\n  padding: 2px 8px 2px 6px;\\n  font-size: 1.2rem;\\n  font-weight: 700;\\n  display: block;\\n  background: transparent;\\n  color: #1495ff;\\n  border: none;\\n  border-radius: 5px;\\n}\\n\\n.edit-button:hover {\\n  cursor: pointer;\\n}\\n\\n#add {\\n  background-color: transparent;\\n  border: none;\\n  width: 30px;\\n}\\n\\n#add:hover {\\n  cursor: pointer;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.show {\\n  display: block;\\n  border: none;\\n  padding: 8px 15px;\\n}\\n\\n.show::after {\\n  content: \\\"\\\\21bb\\\";\\n  font-size: 1.8rem;\\n  color: #1495ff;\\n  font-weight: 700;\\n}\\n\\n.show:hover {\\n  cursor: pointer;\\n}\\n\\n#clear-all {\\n  width: 100%;\\n  border: none;\\n  padding: 15px;\\n  font-size: 1rem;\\n  font-weight: 900;\\n  color: #1495ff;\\n  background-color: #0c002e;\\n}\\n\\n#clear-all:hover {\\n  cursor: pointer;\\n}\\n\\n@media (max-width: 600px) {\\n  input[type=\\\"text\\\"] {\\n    font-size: 1rem;\\n  }\\n\\n  input[type=\\\"checkbox\\\"] {\\n    width: 45px;\\n  }\\n\\n  .edit-button {\\n    font-size: 1rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_get_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/get-list.js */ \"./modules/get-list.js\");\n/* harmony import */ var _modules_create_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/create-list.js */ \"./modules/create-list.js\");\n/* harmony import */ var _modules_delete_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/delete-list.js */ \"./modules/delete-list.js\");\n/* harmony import */ var _modules_edit_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/edit-list.js */ \"./modules/edit-list.js\");\n/* harmony import */ var _modules_checkbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/checkbox.js */ \"./modules/checkbox.js\");\n/* harmony import */ var _modules_clear_all_completed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/clear-all-completed.js */ \"./modules/clear-all-completed.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst addBtn = document.querySelector('#add');\nconst clearAllCompleted = document.getElementById('clear-all');\nconst inputText = document.getElementById('add-list');\n\nwindow.addEventListener('DOMContentLoaded', _modules_get_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\naddBtn.addEventListener('click', () => {\n  (0,_modules_create_list_js__WEBPACK_IMPORTED_MODULE_2__.addList)(inputText);\n});\nclearAllCompleted.addEventListener('click', _modules_clear_all_completed_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n_modules_create_list_js__WEBPACK_IMPORTED_MODULE_2__.listContainer.addEventListener('click', _modules_delete_list_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n_modules_create_list_js__WEBPACK_IMPORTED_MODULE_2__.listContainer.addEventListener('click', _modules_edit_list_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n_modules_create_list_js__WEBPACK_IMPORTED_MODULE_2__.listContainer.addEventListener('change', _modules_checkbox_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;