
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
        const markup =`
        <ul>
        for( i=1; i= this._ingredients.length;i++){
            <li>this._ingredients[i] this._mesures[i]</li>
        }
        </ul>
        ` 

    }
}