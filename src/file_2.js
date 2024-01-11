import { Recette } from "./classes/Recette";
// let categories = document.getElementById('categories');
// let pays = document.getElementById('pays');

//     fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
//     .then ((response) => response.json())
//             .then(function(data) {
//                 console.log(data)
//                 for (let meal of data.meals){
//                     categories.innerHTML += `
//                     <a class="dropdown-item"  style="text-decoration:none;" href="#" onclick = "rechercheC('${meal.strCategory}')">${meal.strCategory}</a>
//                     `
//                 }
//             })
//     .catch(function (error) {
//     console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
//   }); 

//     fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   
//     .then ((response) => response.json())
//             .then(function(data) {
//                 for (let meal of data.meals){
//                     pays.innerHTML +=`
//                     <a class="dropdown-item"  style="text-decoration:none;" href="#" onclick = "rechercheP('${meal.strArea}')">${meal.strArea}</a>
//                     `  
//                 }
//             })
//     .catch(function (error) {
//     console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
//   });
//     function rechercheC(categorie){
//         const urlStart = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
//         const url = `${urlStart}${categorie}`;
//         fetch(url)
//         .then ((response) => response.json())
//             .then(function(data) {
//                 console.log(data)
//             })
//             .catch(function (error) {
//     console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
//   });
//    }

//    function rechercheP(pays){
//         const urlStart = "https://www.themealdb.com/api/json/v1/1/filter.php?a="
//         const url = `${urlStart}${pays}`;
//         fetch(url)
//         .then ((response) => response.json())
//             .then(function(data) {
//                 console.log(data)
//             })
//             .catch(function (error) {
//     console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
//   });
//    }

let categoriesMenu = document.getElementById('categoriesMenu');
let paysMenu = document.getElementById('paysMenu');  


let urlStartArea = 'https://www.themealdb.com/api/json/v1/1/filter.php?a='
let urlStartCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
let recettes = document.getElementById('recettes');

fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then ((response) => response.json())
            .then(function(data) {
                console.log(data)
                for (let meal of data.meals){
                    categoriesMenu.innerHTML += `
                    <a class="categories dropdown-item"  style="text-decoration:none;" href="#" >${meal.strCategory}</a>
                    `
                }
                var categories = document.getElementsByClassName('categories')
                for (var j = 0 ; j < categories.length; j++) {
                    categories[j].addEventListener("click", rechercheRecetteCategory)
                }
            })
            
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  }); 

    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   
    .then ((response) => response.json())
            // afficher dans le html la liste des régions
            .then(function(data) {
                for (let meal of data.meals){                 
                paysMenu.innerHTML +=`
                    <div class="areas dropdown-item"  value=${meal.strArea}>${meal.strArea}</div>
                    `            
                }       
                let areas = document.getElementsByClassName('areas')  
                // Chercher des recettes au clic de sélection de la région lorsque la liste a été crée
                for (var i = 0 ; i < areas.length; i++) {
                    areas[i].addEventListener("click", rechercheRecetteArea)
                }
                         
            })
               
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  });


   

  

function rechercheRecetteArea(event){
    console.log('fonction recherche area en cours')
    let area = event.target.getAttribute('value');
    console.log(area)
    let url = `${urlStartArea}${area}`
        fetch(url)
    
        .then((response) => response.json())
        .then(function(data) {
            console.log(data)
            let i=1;
            let ingredients=[];
            let mesures =[];       
                for (let meal of data.meals){
                    console.log(meal.strIngredient1)
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;
                    console.log(meal.strIngredient1)
                    if(typeof(meal.strIngredient1 != undefined)){
                        ingredients=[];
                        mesures =[]; 
                        while(meal['strIngredient'+i] != "" ){
                        
                            ingredients.push (meal['strIngredient'+i]);
                            mesures.push (meal['strMeasure' +i]);
                            i++
                        }   
                    }     
                    let recette = new Recette(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, ingredients, mesures );
                    recettes.innerHTML = "";
                    recettes.appendChild(recette.card);  
                }
                
            
        })
        .catch(function(error) {
            console.log(error);
          });
}



