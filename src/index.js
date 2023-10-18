import { Recette } from "./classes/Recette";
import { Ingredient } from "./classes/Ingredient";
let urlStart = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
let valider = document.getElementById('search-addon')
let recettes = document.getElementById('recettes');
let recettesAleatoires = document.getElementById('recettesAleatoires');
let categories = document.getElementById('categories');
let regions = document.getElementById('regions');

fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then ((response) => response.json())
            .then(function(data) {
                for (let meal of data.meals){
                    console.log(meal.strCategory);
                    categories.innerHTML += `
                    <a class="dropdown-item"  style="text-decoration:none;" href="#">${meal.strCategory}</a>
                    `
                }
            });  
            
fetch('www.themealdb.com/api/json/v1/1/list.php?a=list')   
    .then ((response) => response.json())
            .then(function(data) {
                console.log(data);
                for (let meal of data.meals){
                    console.log(meal.strArea);
                    regions.innerHTML +=`
                    <a class="dropdown-item"  style="text-decoration:none;" href="#">${meal.strArea}</a>
                    `  
                }
            })
 
valider.addEventListener("click", rechercheRecette)

function rechercheRecette(event){
    recettesAleatoires.classList.add("d-none");
    event.preventDefault(); 
    let inputValue = document.getElementById('search').value
    console.log(inputValue);
    let url = `${urlStart}${inputValue}`
        fetch(url)
    
        .then((response) => response.json())
        .then(function(data) {
            // console.log(data)
            let i=1;
            let ingredients=[];
            let mesures =[];       
                for (let meal of data.meals){
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;
                    console.log(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, strIngredient1);
                    ingredients=[];
                    mesures =[]; 
                    ///ingredient = 'strIngredient'+i;
                    //const{ingredient} = meal;

                    // for(let j=1;j<21; j++){
                    //     console.log('strIngredient'+j,meal['strIngredient'+j]);
                    // }

                    console.log('strIngredient' + i );

                    while(meal['strIngredient'+i] != "" ){
                    
                        ingredients.push (meal['strIngredient'+i]);
                        mesures.push (meal['strMeasure' +i]);
                        i++
                    }
            
                    console.log("les ingredients:")
                    console.log(ingredients);
                    console.log(mesures);
                    // let ingredientsRecette= new Ingredient(ingredients,mesures)
                    let recette = new Recette(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, ingredients, mesures );
                    console.log (recette)
                    recettesA.appendChild(recette.card);
   
                }
            
        })
        .catch(function(error) {
            console.log(error);
          });
}

for(let i=0; i<6; i++){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then ((response) => response.json())
            .then(function(data) {
                const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = data.meals[0];
                console.log (strMeal);
                // console.log(data)
                let recette = new Recette(idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb)
                recettesAleatoires.appendChild( recette.card)
            })   
        }
//PAGE 2

