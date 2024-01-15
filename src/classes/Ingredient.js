
export class Ingredient{

    _ingredients;
    _mesures;

    constructor(ingredient, mesure){
        this._ingredients = ingredient;
        this._mesures = mesure;
    }

    get ingredient(){
        return this._ingredients
    }

    set ingredient(ingredient){
        this._ingredients = ingredient;
    }

    get mesures(){
        return this._mesures
    }

    set ingredient(mesures){
        this._mesures = mesures;
    }


    get content(){
        const div = document.createElement("div");
        div.classList.add("ingredients");
        let lengthIngredients = this._ingredients.length
        let markupIngredients =`<h3>Ingrédients</h3>
        <ul>`
        for(let ind = 0; ind < lengthIngredients; ind++){
            markupIngredients +=`
            <li>${this._ingredients[ind]} ${this._mesures[ind]}</li>
            `
            div.innerHTML = markupIngredients
            
        }
        // div.innerHTML=`</ul>`
        console.log(markupIngredients)
        console.log(div)
        return div;
    }
}