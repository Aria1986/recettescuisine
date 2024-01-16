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

/***/ "./src/classes/Ingredient.js":
/*!***********************************!*\
  !*** ./src/classes/Ingredient.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ingredient: () => (/* binding */ Ingredient)\n/* harmony export */ });\n\r\nclass Ingredient{\r\n\r\n    _ingredients;\r\n    _mesures;\r\n\r\n    constructor(ingredient, mesure){\r\n        this._ingredients = ingredient;\r\n        this._mesures = mesure;\r\n    }\r\n\r\n    get ingredient(){\r\n        return this._ingredients\r\n    }\r\n\r\n    set ingredient(ingredient){\r\n        this._ingredients = ingredient;\r\n    }\r\n\r\n    get mesures(){\r\n        return this._mesures\r\n    }\r\n\r\n    set ingredient(mesures){\r\n        this._mesures = mesures;\r\n    }\r\n\r\n\r\n    get content(){\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"ingredients\");\r\n        let lengthIngredients = this._ingredients.length\r\n        let markupIngredients =`<h3>Ingredients</h3>\r\n        <ul>`\r\n        for(let ind = 0; ind < lengthIngredients; ind++){\r\n            markupIngredients +=`\r\n            <li>${this._ingredients[ind]} ${this._mesures[ind]}</li>\r\n            `\r\n            div.innerHTML = markupIngredients\r\n            \r\n        }\r\n        // div.innerHTML=`</ul>`\r\n        console.log(markupIngredients)\r\n        console.log(div)\r\n        return div;\r\n    }\r\n}\n\n//# sourceURL=webpack://sc/./src/classes/Ingredient.js?");

/***/ }),

/***/ "./src/classes/Recette.js":
/*!********************************!*\
  !*** ./src/classes/Recette.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Recette: () => (/* binding */ Recette)\n/* harmony export */ });\n/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingredient */ \"./src/classes/Ingredient.js\");\n\r\n\r\nclass Recette{\r\n\r\n    _idMeal\r\n    _nom;\r\n    _strCategory\r\n    _strArea\r\n    _strInstructions\r\n    _strMealThumb\r\n    _ingredients\r\n\r\n        constructor(id, nom, img,  categorie = null, region = null, instructions = null)  {\r\n            this._idMeal = id;\r\n            this._nom = nom;\r\n            this._strCategory = categorie;\r\n            this._strArea = region;\r\n            this._strInstructions = instructions;\r\n            this._strMealThumb = img;\r\n\r\n\r\n        }\r\n\r\n    //getter & setters\r\n    get idMeal(){\r\n        return this._idMeal;\r\n    }\r\n     \r\n    get nom(){\r\n        return this._nom;\r\n    }\r\n\r\n    set nom(nom){\r\n        this._nom = nom;\r\n    }\r\n\r\n    get strCategory(){\r\n        return this._strCategory;\r\n    }\r\n\r\n    set strCategory(category){\r\n        this._strCategory = category;\r\n    }\r\n\r\n    get strArea(){\r\n        return this._strCategory;\r\n    }\r\n\r\n    set strArea(area){\r\n        this._strArea= area;\r\n    }\r\n\r\n    get content() {\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"recette\");\r\n        const markupR =\r\n        `<h2 class=\"text-center m-5 w-100\">${this._nom}</h2>\r\n        <br>\r\n        <h4><i>nationality of the recipe: ${this._strArea}</i></h4>\r\n        <img class=\"img-thumbnail m-auto\" src=\"${this._strMealThumb}\"/>\r\n        `\r\n        div.innerHTML = markupR;\r\n        \r\n      \r\n    return div;\r\n    }\r\n    get instructions(){\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"instructions\");\r\n        div.classList.add(\"w-full\");\r\n        const markupInstruction =\r\n        `\r\n         <h3>Instructions</h3>\r\n        <p>${this._strInstructions}</p>\r\n        `\r\n        div.innerHTML = markupInstruction;\r\n        return div\r\n    }\r\n\r\n    get card(){\r\n        const li = document.createElement(\"li\");\r\n        li.classList.add(\"carte\");\r\n        const markup =\r\n        `<div class=\"card-body w-70% m-4\">\r\n            <h3 class=\"text-center\">${this._nom}</h2>\r\n            <img class=\"img-thumbnail\" src=\"${this._strMealThumb}\" />\r\n            <button  class=\"buttonRecipe d-block m-auto mt-3\" value=${this._idMeal} >Show the recipe </button>\r\n        </div>\r\n        `\r\n        li.innerHTML = markup;\r\n        let buttonsRecipe = document.getElementsByClassName('buttonRecipe')\r\n        for (var u = 0 ; u < buttonsRecipe.length; u++) {\r\n            buttonsRecipe[u].addEventListener(\"click\", this.afficherRecetteEntiere)\r\n        }\r\n        \r\n        return li;\r\n    }\r\n\r\n    afficherRecetteEntiere(event){\r\n        let recettes = document.getElementById('recettes')\r\n        let divRecette = document.getElementById('recette')\r\n        let id = event.target.getAttribute('value');\r\n        recettes.innerHTML = \"\";\r\n        let urlStart='https://www.themealdb.com/api/json/v1/1/lookup.php?i='\r\n        let url = `${urlStart}${id}`\r\n        fetch(url)\r\n            .then((response) => response.json())\r\n            .then (function(data){\r\n                console.log(data)\r\n                let i=1;\r\n                let ingredientsTab=[];\r\n                let mesuresTab =[]; \r\n                recettes.innerHTML = \"\";\r\n               \r\n                for (let meal of data.meals){\r\n                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;\r\n                    console.log(meal.strIngredient1)\r\n                    if(typeof(meal.strIngredient1 != undefined)){\r\n                        while(meal['strIngredient'+i] != \"\" ){\r\n                        \r\n                            ingredientsTab.push (meal['strIngredient'+i]);\r\n                            mesuresTab.push (meal['strMeasure' +i]);\r\n                            i++\r\n                        }   \r\n                    }     \r\n                    let recette = new Recette(idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions);   \r\n                    let ingredients = new _Ingredient__WEBPACK_IMPORTED_MODULE_0__.Ingredient(ingredientsTab,mesuresTab)            \r\n                    divRecette.appendChild(recette.content); \r\n                    divRecette.appendChild(ingredients.content);  \r\n                    divRecette.appendChild(recette.instructions); \r\n                }\r\n                \r\n        })  \r\n        .catch(function(error) {\r\n            console.log(error);\r\n          });\r\n    }\r\n\r\n\r\n      \r\n    \r\n}\n\n//# sourceURL=webpack://sc/./src/classes/Recette.js?");

/***/ }),

/***/ "./src/file_2.js":
/*!***********************!*\
  !*** ./src/file_2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Recette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Recette */ \"./src/classes/Recette.js\");\n\r\n\r\n// let categories = document.getElementById('categories');\r\n// let pays = document.getElementById('pays');\r\n\r\n//     fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')\r\n//     .then ((response) => response.json())\r\n//             .then(function(data) {\r\n//                 console.log(data)\r\n//                 for (let meal of data.meals){\r\n//                     categories.innerHTML += `\r\n//                     <a class=\"dropdown-item\"  style=\"text-decoration:none;\" href=\"#\" onclick = \"rechercheC('${meal.strCategory}')\">${meal.strCategory}</a>\r\n//                     `\r\n//                 }\r\n//             })\r\n//     .catch(function (error) {\r\n//     console.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n//   }); \r\n\r\n//     fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   \r\n//     .then ((response) => response.json())\r\n//             .then(function(data) {\r\n//                 for (let meal of data.meals){\r\n//                     pays.innerHTML +=`\r\n//                     <a class=\"dropdown-item\"  style=\"text-decoration:none;\" href=\"#\" onclick = \"rechercheP('${meal.strArea}')\">${meal.strArea}</a>\r\n//                     `  \r\n//                 }\r\n//             })\r\n//     .catch(function (error) {\r\n//     console.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n//   });\r\n//     function rechercheC(categorie){\r\n//         const urlStart = \"https://www.themealdb.com/api/json/v1/1/filter.php?c=\"\r\n//         const url = `${urlStart}${categorie}`;\r\n//         fetch(url)\r\n//         .then ((response) => response.json())\r\n//             .then(function(data) {\r\n//                 console.log(data)\r\n//             })\r\n//             .catch(function (error) {\r\n//     console.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n//   });\r\n//    }\r\n\r\n//    function rechercheP(pays){\r\n//         const urlStart = \"https://www.themealdb.com/api/json/v1/1/filter.php?a=\"\r\n//         const url = `${urlStart}${pays}`;\r\n//         fetch(url)\r\n//         .then ((response) => response.json())\r\n//             .then(function(data) {\r\n//                 console.log(data)\r\n//             })\r\n//             .catch(function (error) {\r\n//     console.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n//   });\r\n//    }\r\n\r\nlet categoriesMenu = document.getElementById('categoriesMenu');\r\nlet paysMenu = document.getElementById('paysMenu');  \r\n\r\n\r\nlet urlStartArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='\r\nlet urlStartCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='\r\nlet recettesDiv = document.getElementById('recettes');\r\nlet recetteDiv = document.getElementById('recette');\r\n\r\nbtnAccueil.addEventListener(\"click\", function(){ recetteDiv.innerHTML = \"\";})\r\n\r\n// afficher liste des catégories cherchées dans API\r\nfetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')\r\n    .then ((response) => response.json())\r\n            .then(function(data) {\r\n                for (let meal of data.meals){\r\n                    categoriesMenu.innerHTML += `\r\n                    <a class=\"categories dropdown-item\"  style=\"text-decoration:none;\" href=\"#\" >${meal.strCategory}</a>\r\n                    `\r\n                }\r\n                // chercher les recettes correspondant à l'élément cliqué dans la liste de catégorie\r\n                let categories = document.getElementsByClassName('categories')\r\n                for (var j = 0 ; j < categories.length; j++) {\r\n                    categories[j].addEventListener(\"click\", rechercheRecetteCategory)\r\n                }\r\n            })\r\n            \r\n    .catch(function (error) {\r\n    console.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n  }); \r\n\r\n  // afficher liste des régionss cherchées dans API\r\n    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   \r\n    .then ((response) => response.json())\r\n            // afficher dans le html la liste des régions\r\n            .then(function(data) {\r\n                for (let meal of data.meals){                 \r\n                paysMenu.innerHTML +=`\r\n                    <div class=\"areas dropdown-item\"  value=${meal.strArea}>${meal.strArea}</div>\r\n                    `            \r\n                }                        \r\n                // Chercher des recettes au clic de sélection de la région lorsque la liste a été crée\r\n                let areas = document.getElementsByClassName('areas')\r\n                for (var i = 0 ; i < areas.length; i++) {\r\n                    areas[i].addEventListener(\"click\", rechercheRecetteArea)\r\n                }\r\n                         \r\n            })\r\n               \r\n    .catch(function (error) {\r\n    console.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n  });\r\n \r\n\r\nfunction rechercheRecetteArea(event){\r\n    let area = event.target.getAttribute('value');\r\n    let url = `${urlStartArea}${area}`\r\n        fetch(url)\r\n    \r\n        .then((response) => response.json())\r\n        .then(function(data) { \r\n                recettesDiv.innerHTML = \"\";\r\n                recettesDiv.innerHTML = `<h3 class=\"w-100 text-center\"> ${area} recipes </h3>`\r\n                for (let meal of data.meals){\r\n                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;\r\n    //                 console.log(meal.strIngredient1)\r\n    //                 if(typeof(meal.strIngredient1 != undefined)){\r\n    //                     ingredients=[];\r\n    //                     mesures =[]; \r\n    //                     while(meal['strIngredient'+i] != \"\" ){\r\n                        \r\n    //                         ingredients.push (meal['strIngredient'+i]);\r\n    //                         mesures.push (meal['strMeasure' +i]);\r\n    //                         i++\r\n    //                     }   \r\n    //                 }     \r\n                    let recette = new _classes_Recette__WEBPACK_IMPORTED_MODULE_0__.Recette(idMeal, strMeal, strMealThumb);                 \r\n                    recettesDiv.appendChild(recette.card);  \r\n                }\r\n                \r\n        })  \r\n        // })\r\n        .catch(function(error) {\r\n            console.log(error);\r\n          });\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfunction rechercheRecetteCategory(event){\r\n    console.log('fonction recherche categorie en cours')\r\n    let categorySearch = event.target.getAttribute('value');\r\n    console.log(categorySearch)\r\n    .catch(function(error) {\r\n        console.log(error);\r\n      });\r\n}\r\n\n\n//# sourceURL=webpack://sc/./src/file_2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Recette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Recette */ \"./src/classes/Recette.js\");\n/* harmony import */ var _classes_Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Ingredient */ \"./src/classes/Ingredient.js\");\n\r\n\r\nlet urlStartSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s='\r\nlet valider = document.getElementById('search-addon')\r\nlet recettes = document.getElementById('recettes');\r\n\r\nlet categories = document.getElementById('categories');\r\nlet regions = document.getElementById('regions');\r\n\r\nvalider.addEventListener(\"click\", function(event){\r\n    let param = document.getElementById('search').value\r\n    rechercheRecette(event,urlStartSearch, param);\r\n  });\r\n\r\n// recherche et affichage de cartes de 6 recettes aléatoires\r\nwindow.addEventListener(\"load\",afficherRecettesAleatoires)\r\n\r\nfunction afficherRecettesAleatoires() {\r\n    for(let i=0; i<6; i++){\r\n        fetch('https://www.themealdb.com/api/json/v1/1/random.php')\r\n            .then ((response) => response.json())\r\n                .then(function(data) {\r\n                    // console.log('recette aleatoire:')\r\n                    // console.log(data)\r\n                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = data.meals[0];\r\n                    let recette = new _classes_Recette__WEBPACK_IMPORTED_MODULE_0__.Recette(idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions)\r\n                    recettes.appendChild( recette.card)               \r\n                })   \r\n    }\r\n}\r\n\r\n\r\nfunction rechercheRecette(event, urlStart, param){\r\n    recettes.innerHTML = \"\";\r\n    event.preventDefault(); \r\n    const url = `${urlStart}${param}`;\r\n    fetch(url)\r\n    .then ((response) => response.json())\r\n        .then(function(data) {\r\n        let i=1;\r\n        let ingredients=[];\r\n        let mesures =[];       \r\n            for (let meal of data.meals){\r\n                const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = meal;\r\n                ingredients=[];\r\n                mesures =[]; \r\n                // récupérer les ingrédients et quantités dans des tableaux\r\n                while(meal['strIngredient'+i] != \"\" ){                  \r\n                    ingredients.push (meal['strIngredient'+i]);\r\n                    mesures.push (meal['strMeasure' +i]);\r\n                    i++\r\n                }        \r\n                let recette = new _classes_Recette__WEBPACK_IMPORTED_MODULE_0__.Recette(idMeal, strMeal,strMealThumb, strCategory, strArea, strInstructions, ingredients, mesures );\r\n                recettes.appendChild(recette.card);  \r\n            }\r\n        })\r\n        .catch(function (error) {\r\nconsole.error('Il y a eu un problème avec l\\'opération fetch : ' + error.message);\r\n});\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//PAGE 2\r\n\r\n\n\n//# sourceURL=webpack://sc/./src/index.js?");

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