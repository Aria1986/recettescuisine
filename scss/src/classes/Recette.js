import { Ingredient } from "./Ingredient";
export class Recette{

    _idMeal
    _nom;
    _strCategory
    _strArea
    _strInstructions
    _strMealThumb
    _ingredients

        constructor(id, nom,  categorie, region, instructions, img, ingredients, mesures ){
            this._idMeal = id;
            this._nom = nom;
            this._strCategory = categorie;
            this._strArea = region;
            this._strInstructions = instructions;
            this._strMealThumb = img;
            this._ingredients = new Ingredient(ingredients, mesures);
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
        const markup =
        `<h2>${this._nom}</h2>
        <span>${this._area}</span>
        <img src="${this._strMealThumb}"/>
        <h3>Ingrédients</h3>
        <span>${this._ingredients.content}<</span>
        <h3>Préparation</h3>
        <p>${this.__strInstructions}</p>`

        div.innerHTML = markup;
    return div;
    }

    get card(){
        const li = document.createElement("li");
        li.classList.add("carte");
        const markup =
        `<div class="card-body col-2 m-3">
            <h2 class="col-12" >${this._nom}</h2>
            <img src="${this._strMealThumb}" />
        </div>
        <button>voir la recette </button>
        `
        li.innerHTML = markup;
        return li;
    }

}
