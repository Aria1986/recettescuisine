import { Recette } from "./classes/Recette";
import { Ingredient } from "./classes/Ingredient";
let urlStartSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
let valider = document.getElementById('search-addon')
let recettes = document.getElementById('recettes');

let categories = document.getElementById('categories');
let regions = document.getElementById('regions');

valider.addEventListener("click", function(event){
    let param = document.getElementById('search').value
    rechercheRecette(event,urlStartSearch, param);
  });

// recherche et affichage de cartes de 6 recettes aléatoires
for(let i=0; i<6; i++){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then ((response) => response.json())
            .then(function(data) {
                const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = data.meals[0];
 
                let recette = new Recette(idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb)
                recettes.appendChild( recette.card)               
            })   
}



function rechercheRecette(event, urlStart, param){
    recettes.innerHTML = "";
    event.preventDefault(); 
    const url = `${urlStart}${param}`;
    fetch(url)
    .then ((response) => response.json())
        .then(function(data) {
        let i=1;
        let ingredients=[];
        let mesures =[];       
            for (let meal of data.meals){
                const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = meal;
                ingredients=[];
                mesures =[]; 
                // récupérer les ingrédients et quantités dans des tableaux
                while(meal['strIngredient'+i] != "" ){                  
                    ingredients.push (meal['strIngredient'+i]);
                    mesures.push (meal['strMeasure' +i]);
                    i++
                }        
                let recette = new Recette(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, ingredients, mesures );
                recettes.appendChild(recette.card);  
            }
        })
        .catch(function (error) {
console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
});
}





//PAGE 2

