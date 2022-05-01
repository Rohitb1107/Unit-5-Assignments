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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './index.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './logo/logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconsole.log(\"Heloo !\")\r\n\r\nconst pic = document.getElementById('logo');\r\n\r\nconst img = document.createElement('img');\r\nimg.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './logo/logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n\r\npic.append(img);\r\n\r\ndocument.querySelector(\"form\").addEventListener(\"submit\",todolist);\r\n    var todoarr= JSON.parse(localStorage.getItem(\"todo\")) || [];\r\n    creattable(todoarr);\r\n\r\n    function todolist(event){\r\n        event.preventDefault();\r\n        document.querySelector(\"tbody\").innerHTML=\"\";\r\n        var itemname=document.querySelector(\"#item\").value;\r\n        var itemqty=document.querySelector(\"#qty\").value;\r\n\r\n        var list={name:itemname,quanity:itemqty};\r\n        todoarr.push(list);\r\n        localStorage.setItem(\"todo\",JSON.stringify(todoarr));\r\n        creattable(todoarr);\r\n    }\r\n\r\n    function creattable(todoarr){\r\n        document.querySelector(\"tbody\").innerHTML=\"\";\r\n        todoarr.map(function (objects,index){\r\n            var tr=document.createElement(\"tr\");\r\n\r\n            var td =document.createElement(\"td\");\r\n            td.textContent=objects.name;\r\n\r\n            var td1=document.createElement(\"td\");\r\n            td1.textContent=objects.quanity;\r\n\r\n            var td2=document.createElement(\"td\");\r\n            td2.textContent= \"Delete\";\r\n            td2.addEventListener(\"click\",function(){\r\n                deleteitem(index);\r\n            })\r\n\r\n            tr.append(td,td1,td2);\r\n            document.querySelector(\"tbody\").append(tr);\r\n        });\r\n    }\r\n    function deleteitem(index){\r\n        todoarr.splice(index,1);\r\n        localStorage.setItem(\"todo\",JSON.stringify(todoarr));\r\n        creattable(todoarr);\r\n    }\n\n//# sourceURL=webpack://webpack-todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;