import { Ingredient } from "./Ingredient";
export class Recette{

    _idMeal
    _nom;
    _strCategory
    _strArea
    _strInstructions
    _strMealThumb
    _ingredients
    _recette = []

        constructor(id, nom,  categorie, region, instructions, img, ingredients, mesures ){
            this._idMeal = id;
            this._nom = nom;
            this._strCategory = categorie;
            this._strArea = region;
            this._strInstructions = instructions;
            this._strMealThumb = img;
            this._ingredient= ingredients;
            this._mesures = mesures
            this._ingredients = new Ingredient(ingredients, mesures);
            this._recette = [id, nom,  categorie, region, instructions, img, ingredients, mesures]
        }

    //getter & setters
    get idMeal(){
        return this._idMeal;
    }

    setidMeal(id){
        this._idMeal = id;
    }
     
    get nom(){
        return this._nom;
    }

    set nom(nom){
        this._nom = nom;
    }

    get strCategory(){
        return this._strCategory;
    }

    set strCategory(category){
        this._strCategory = category;
    }

    get content() {
        const div = document.createElement("div");
        div.classList.add("recette");
        const markupR =
        `<h2>${this._nom}</h2>
        <span>${this._area}</span>
        <img src="${this._strMealThumb}"/>
        <h3>Ingrédients</h3>
        <span>${this._ingredients.content}<</span>
        <h3>Préparation</h3>
        <p>${this.__strInstructions}</p>`

        div.innerHTML = markupR;
    return div;
    }

    get card(){
        const li = document.createElement("li");
        li.classList.add("carte");
        const markup =
        `<div class="card-body w-70% m-4">
            <h3 class="text-center">${this._nom}</h2>
            <img class="mt-4 img-thumbnail" src="${this._strMealThumb}" />
            <button  class="d-block m-auto mt-3" onclick="afficherRecette(${this._idMeal},${this._strCategory},${this._nom},${this._strArea},'${this._strInstructions}',${this._strMealThumb},${this._ingredient},${this._mesures})">voir la recette </button>
        </div>
        `
        li.innerHTML = markup;
        return li;
    }

    
}
// li.appendChild(${this.content})