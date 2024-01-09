/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Ingredient.js":
/*!***********************************!*\
  !*** ./src/classes/Ingredient.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ingredient: () => (/* binding */ Ingredient)\n/* harmony export */ });\n\r\nclass Ingredient{\r\n\r\n    _ingredients;\r\n    _mesures;\r\n\r\n    constructor(ingredient, mesure){\r\n        this._ingredients = ingredient;\r\n        this._mesures = mesure;\r\n    }\r\n\r\n    get ingredient(){\r\n        return this._ingredients\r\n    }\r\n\r\n    set ingredient(ingredient){\r\n        this._ingredients = ingredient;\r\n    }\r\n\r\n    get mesures(){\r\n        return this._mesures\r\n    }\r\n\r\n    set ingredient(mesures){\r\n        this._mesures = mesures;\r\n    }\r\n\r\n\r\n    get content(){\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"ingredients\");\r\n        const markup =`\r\n        <ul>\r\n        for( i=1; i= this._ingredients.length;i++){\r\n            <li>this._ingredients[i] this._mesures[i]</li>\r\n        }\r\n        </ul>\r\n        ` \r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://sc/./src/classes/Ingredient.js?");

/***/ }),

/***/ "./src/classes/Recette.js":
/*!********************************!*\
  !*** ./src/classes/Recette.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Recette: () => (/* binding */ Recette)\n/* harmony export */ });\n/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingredient */ \"./src/classes/Ingredient.js\");\n\r\nclass Recette{\r\n\r\n    _idMeal\r\n    _nom;\r\n    _strCategory\r\n    _strArea\r\n    _strInstructions\r\n    _strMealThumb\r\n    _ingredients\r\n    _recette = []\r\n\r\n        constructor(id, nom,  categorie, region, instructions, img, ingredients, mesures ){\r\n            this._idMeal = id;\r\n            this._nom = nom;\r\n            this._strCategory = categorie;\r\n            this._strArea = region;\r\n            this._strInstructions = instructions;\r\n            this._strMealThumb = img;\r\n            this._ingredient= ingredients;\r\n            this._mesures = mesures\r\n            this._ingredients = new _Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient(ingredients, mesures);\r\n            this._recette = [id, nom,  categorie, region, instructions, img, ingredients, mesures]\r\n        }\r\n\r\n    //getter & setters\r\n    get idMeal(){\r\n        return this._idMeal;\r\n    }\r\n\r\n    setidMeal(id){\r\n        this._idMeal = id;\r\n    }\r\n     \r\n    get nom(){\r\n        return this._nom;\r\n    }\r\n\r\n    set nom(nom){\r\n        this._nom = nom;\r\n    }\r\n\r\n    get strCategory(){\r\n        return this._strCategory;\r\n    }\r\n\r\n    set strCategory(category){\r\n        this._strCategory = category;\r\n    }\r\n\r\n    get content() {\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"recette\");\r\n        const markupR =\r\n        `<h2>${this._nom}</h2>\r\n        <span>${this._area}</span>\r\n        <img src=\"${this._strMealThumb}\"/>\r\n        <h3>Ingrédients</h3>\r\n        <span>${this._ingredients.content}<</span>\r\n        <h3>Préparation</h3>\r\n        <p>${this.__strInstructions}</p>`\r\n\r\n        div.innerHTML = markupR;\r\n    return div;\r\n    }\r\n\r\n    get card(){\r\n        const li = document.createElement(\"li\");\r\n        li.classList.add(\"carte\");\r\n        const markup =\r\n        `<div class=\"card-body w-70% m-4\">\r\n            <h3 class=\"text-center\">${this._nom}</h2>\r\n            <img class=\"mt-4 img-thumbnail\" src=\"${this._strMealThumb}\" />\r\n            <button  class=\"d-block m-auto mt-3\" onclick=\"afficherRecette(${this._idMeal},${this._strCategory},${this._nom},${this._strArea},'${this._strInstructions}',${this._strMealThumb},${this._ingredient},${this._mesures})\">voir la recette </button>\r\n        </div>\r\n        `\r\n        li.innerHTML = markup;\r\n        return li;\r\n    }\r\n\r\n    \r\n}\r\n// li.appendChild(${this.content})\n\n//# sourceURL=webpack://sc/./src/classes/Recette.js?");

/***/ }),

/***/ "./src/file_2.js":
/*!***********************!*\
  !*** ./src/file_2.js ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (67:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| }\\n| \\n> }\\n| \\n| \");\n\n//# sourceURL=webpack://sc/./src/file_2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Recette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Recette */ \"./src/classes/Recette.js\");\n/* harmony import */ var _classes_Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Ingredient */ \"./src/classes/Ingredient.js\");\n\r\n\r\nlet urlStart = 'https://www.themealdb.com/api/json/v1/1/search.php?s='\r\nlet valider = document.getElementById('search-addon')\r\nlet recettesA = document.getElementById('recettesA');\r\nlet recettesAleatoires = document.getElementById('recettesAleatoires');\r\nlet categories = document.getElementById('categories');\r\nlet regions = document.getElementById('regions');\r\n\r\nvalider.addEventListener(\"click\", rechercheRecette)\r\n\r\n\r\n\r\nfunction rechercheRecette(event){\r\n    recettesAleatoires.classList.add(\"d-none\");\r\n    event.preventDefault(); \r\n    let inputValue = document.getElementById('search').value\r\n    console.log(inputValue);\r\n    let url = `${urlStart}${inputValue}`\r\n        fetch(url)\r\n    \r\n        .then((response) => response.json())\r\n        .then(function(data) {\r\n            console.log(data)\r\n            let i=1;\r\n            let ingredients=[];\r\n            let mesures =[];       \r\n                for (let meal of data.meals){\r\n                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;\r\n                    // console.log(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, strIngredient1);\r\n                    ingredients=[];\r\n                    mesures =[]; \r\n                    while(meal['strIngredient'+i] != \"\" ){\r\n                    \r\n                        ingredients.push (meal['strIngredient'+i]);\r\n                        mesures.push (meal['strMeasure' +i]);\r\n                        i++\r\n                    }        \r\n                    console.log(ingredients)\r\n                    console.log(mesures)  \r\n                    // let ingredientsRecette= new Ingredient(ingredients,mesures)\r\n                    let recette = new _classes_Recette__WEBPACK_IMPORTED_MODULE_0__.Recette(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, ingredients, mesures );\r\n                    recettesA.appendChild(recette.card);  \r\n                }\r\n                \r\n            \r\n        })\r\n        .catch(function(error) {\r\n            console.log(error);\r\n          });\r\n}\r\n\r\n\r\nfor(let i=0; i<6; i++){\r\n    fetch('https://www.themealdb.com/api/json/v1/1/random.php')\r\n        .then ((response) => response.json())\r\n            .then(function(data) {\r\n                const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = data.meals[0];\r\n                // console.log (strMeal);\r\n                // console.log(data)\r\n                let recette = new _classes_Recette__WEBPACK_IMPORTED_MODULE_0__.Recette(idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb)\r\n                recettesAleatoires.appendChild( recette.card)\r\n                \r\n            })   \r\n        }\r\n//PAGE 2\r\n\r\n\n\n//# sourceURL=webpack://sc/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/file_2.js");
/******/ 	
/******/ })()
;