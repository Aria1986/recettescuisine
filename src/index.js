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
window.addEventListener("load",afficherRecettesAleatoires)

function afficherRecettesAleatoires() {
    for(let i=0; i<6; i++){
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then ((response) => response.json())
                .then(function(data) {
                    // console.log('recette aleatoire:')
                    // console.log(data)
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = data.meals[0];
                    let recette = new Recette(idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions)
                    recettes.appendChild( recette.card)               
                })   
    }
}


function rechercheRecette(event, urlStart, param){
    recettes.innerHTML = "";
    event.preventDefault(); 
    const url = `${urlStart}${param}`;
    fetch(url)
    .then ((response) => response.json())
        .then(function(data) {
        
                let recette = new Recette(idMeal, strMeal,strMealThumb, strCategory, strArea, strInstructions);
                recettes.appendChild(recette.card);  
            }
        )
        .catch(function (error) {
console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
});
}

//PAGE 2

let categoriesMenu = document.getElementById('categoriesMenu');
let paysMenu = document.getElementById('paysMenu');  


let urlStartArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='
let urlStartCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
let recettesDiv = document.getElementById('recettes');
let recetteDiv = document.getElementById('recette');
let btnAccueil = document.getElementById('btnAccueil')

// effacer recette afficher recettes aléatoires au clic du bouton
btnAccueil.addEventListener("click", function(){ 
    recetteDiv.innerHTML = ""
    afficherRecettesAleatoires();})


// afficher liste des catégories cherchées dans API
fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then ((response) => response.json())
            .then(function(data) {
                for (let meal of data.meals){
                    categoriesMenu.innerHTML += `
                    <a class="categories dropdown-item"  style="text-decoration:none;" href="#" >${meal.strCategory}</a>
                    `
                }
                // chercher les recettes correspondant à l'élément cliqué dans la liste de catégorie
                let categories = document.getElementsByClassName('categories')
                for (var j = 0 ; j < categories.length; j++) {
                    categories[j].addEventListener("click", rechercheRecetteCategory)
                }
            })
            
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  }); 

  // afficher liste des régionss cherchées dans API
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   
    .then ((response) => response.json())
            // afficher dans le html la liste des régions
            .then(function(data) {
                for (let meal of data.meals){                 
                paysMenu.innerHTML +=`
                    <div class="areas dropdown-item"  value=${meal.strArea}>${meal.strArea}</div>
                    `            
                }                        
                // Chercher des recettes au clic de sélection de la région lorsque la liste a été crée
                let areas = document.getElementsByClassName('areas')
                for (var i = 0 ; i < areas.length; i++) {
                    areas[i].addEventListener("click", rechercheRecetteArea)
                }
                         
            })
               
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  });
 

function rechercheRecetteArea(event){
    let area = event.target.getAttribute('value');
    let url = `${urlStartArea}${area}`
        fetch(url)
    
        .then((response) => response.json())
        .then(function(data) { 
                recettesDiv.innerHTML = "";
                recettesDiv.innerHTML = `<h3 class="w-100 text-center"> ${area} recipes </h3>`
                for (let meal of data.meals){
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;    
                    let recette = new Recette(idMeal, strMeal, strMealThumb);                 
                    recettesDiv.appendChild(recette.card);  
                }
                
        })  
        .catch(function(error) {
            console.log(error);
          });
}


function rechercheRecetteCategory(event){
    console.log('fonction recherche categorie en cours')
    let categorySearch = event.target.getAttribute('value');
    console.log(categorySearch)
    .catch(function(error) {
        console.log(error);
      });
}
