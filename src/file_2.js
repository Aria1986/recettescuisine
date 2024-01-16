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
let recettesDiv = document.getElementById('recettes');
let recetteDiv = document.getElementById('recette');

btnAccueil.addEventListener("click", function(){ recetteDiv.innerHTML = "";})

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
    //                 console.log(meal.strIngredient1)
    //                 if(typeof(meal.strIngredient1 != undefined)){
    //                     ingredients=[];
    //                     mesures =[]; 
    //                     while(meal['strIngredient'+i] != "" ){
                        
    //                         ingredients.push (meal['strIngredient'+i]);
    //                         mesures.push (meal['strMeasure' +i]);
    //                         i++
    //                     }   
    //                 }     
                    let recette = new Recette(idMeal, strMeal, strMealThumb);                 
                    recettesDiv.appendChild(recette.card);  
                }
                
        })  
        // })
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
