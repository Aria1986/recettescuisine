import { Ingredient } from "./Ingredient";

export class Recette{

    _idMeal
    _nom;
    _strCategory
    _strArea
    _strInstructions
    _strMealThumb
    _ingredients

        constructor(id, nom, img,  categorie = null, region = null, instructions = null,  ingredients = null, mesures = null){
            this._idMeal = id;
            this._nom = nom;
            this._strCategory = categorie;
            this._strArea = region;
            this._strInstructions = instructions;
            this._strMealThumb = img;
            this._ingredient= ingredients;
            this._mesures = mesures
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
            <button  class="buttonRecipe d-block m-auto mt-3" value=${this._idMeal} >voir la recette </button>
        </div>
        `
        li.innerHTML = markup;
        let buttonsRecipe = document.getElementsByClassName('buttonRecipe')
        for (var u = 0 ; u < buttonsRecipe.length; u++) {
            buttonsRecipe[u].addEventListener("click", this.afficherRecetteEntiere)
        }
        
        return li;
    }

    afficherRecetteEntiere(event){
        let recettes = document.getElementById('recettes')
        let id = event.target.getAttribute('value');
        recettes.innerHTML = "";
        let urlStart='https://www.themealdb.com/api/json/v1/1/lookup.php?i='
        let url = `${urlStart}${id}`
        fetch(url)
            .then((response) => response.json())
            .then (function(data){
                console.log(data)
                let i=1;
                let ingredients=[];
                let mesures =[]; 
                recettes.innerHTML = "";
               
                for (let meal of data.meals){
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;
                    console.log(meal.strIngredient1)
                    if(typeof(meal.strIngredient1 != undefined)){
                        while(meal['strIngredient'+i] != "" ){
                        
                            ingredients.push (meal['strIngredient'+i]);
                            mesures.push (meal['strMeasure' +i]);
                            i++
                        }   
                    }     
                    let recette = new Recette(idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions,ingredients,mesures);                 
                    recettes.appendChild(recette.content);  
                }
                
        })  
        .catch(function(error) {
            console.log(error);
          });
    }


      
    
}