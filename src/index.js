import { Recette } from "./classes/Recette";
import { Ingredient } from "./classes/Ingredient";
// début d'urls appels API
let urlStartSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
let urlStartArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='
let urlStartCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
// déclaration des variables correspondantes aux id nécessaires
let valider = document.getElementById('search-addon')
let categoriesMenu = document.getElementById('categoriesMenu');
let paysMenu = document.getElementById('paysMenu');  
let recettesDiv = document.getElementById('recettes');
let recetteDiv = document.getElementById('recette');
let btnAccueil = document.getElementById('btnAccueil')

// recherche de recette par mot clé
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
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb} = data.meals[0];
                    let recette = new Recette(idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions)
                    recettesDiv.appendChild( recette.card)               
                })   
    }
}


function rechercheRecette(event, urlStart, param){
    console.log(param)
    recetteDiv.innerHTML = "";
    recettesDiv.innerHTML = "";
    event.preventDefault(); 
    const url = `${urlStart}${param}`;
    fetch(url)
    .then ((response) => response.json())
        .then(function(data) {
                recettesDiv.innerHTML = `<h3 class="w-100 text-center"> ${param} recipes </h3>`
                for (let meal of data.meals){
                     const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;    
                    let recette = new Recette(idMeal, strMeal,strMealThumb, strCategory, strArea, strInstructions);
                    recettesDiv.appendChild(recette.card);  
            }
})
        .catch(function (error) {
console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
});
}


// afficher recettes aléatoires au clic du bouton ( et effacer recette )
btnAccueil.addEventListener("click", function(){ 
    recetteDiv.innerHTML = ""
    recettesDiv.innerHTML = ""
    afficherRecettesAleatoires();})


// afficher liste des catégories cherchées dans API
fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then ((response) => response.json())
            .then(function(data) {
                for (let meal of data.meals){
                    categoriesMenu.innerHTML += `
                    <div class="categories dropdown-item" value=${meal.strCategory}  >${meal.strCategory}</div>
                    `
                }
                // chercher les recettes correspondant à l'élément cliqué dans la liste de catégorie
                let categories = document.getElementsByClassName('categories')
                for (var j = 0 ; j < categories.length; j++) {
                    categories[j].addEventListener("click",  function(e){
                        let category = e.target.getAttribute('value');
                        console.log(e.target.getAttribute('value'));
                        rechercheRecette(e,urlStartCategory,category);
                    })
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
                    areas[i].addEventListener("click", function(e){
                        let area = e.target.getAttribute('value');
                        rechercheRecette(e,urlStartArea,area)
                    })
                }
                         
            })
               
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  });
 
