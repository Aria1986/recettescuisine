var areas = document.getElementsByClassName(area)
var categories = document.getElementsByClassName(category)
let urlStartArea = 'www.themealdb.com/api/json/v1/1/filter.php?a='
let urlStartCategory = 'www.themealdb.com/api/json/v1/1/filter.php?c='
let recettes = document.getElementById('recettes');

fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then ((response) => response.json())
            .then(function(data) {
                for (let meal of data.meals){
                    categories.innerHTML += `
                    <a class="category dropdown-item"  style="text-decoration:none;" >${meal.strCategory}</a>
                    `
                }
            });  
            
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   
    .then ((response) => response.json())
            .then(function(data) {
                for (let meal of data.meals){
                    console.log(meal.strArea);
                    regions.innerHTML +=`
                    <a class="area dropdown-item"  style="text-decoration:none;" >${meal.strArea}</a>
                    `  
                }
            })
 
areas.addEventListener("click", rechercheRecetteArea)
categories.addEventListener("click", rechercheRecetteCategory)

function rechercheRecetteArea(event){
    let area = areas.value
    let url = `${urlStartArea}${area}`
        fetch(url)
    
        .then((response) => response.json())
        .then(function(data) {
            console.log(data)
            let i=1;
            let ingredients=[];
            let mesures =[];       
                for (let meal of data.meals){
                    const{idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,strIngredient1} = meal;
                    // console.log(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, strIngredient1);
                    ingredients=[];
                    mesures =[]; 
                    while(meal['strIngredient'+i] != "" ){
                    
                        ingredients.push (meal['strIngredient'+i]);
                        mesures.push (meal['strMeasure' +i]);
                        i++
                    }        
                    console.log(ingredients)
                    console.log(mesures)  
                    // let ingredientsRecette= new Ingredient(ingredients,mesures)
                    let recette = new Recette(idMeal, strMeal, strCategory, strArea, strInstructions,strMealThumb, ingredients, mesures );
                    recettes.appendChild(recette.card);  
                }
                
            
        })
        .catch(function(error) {
            console.log(error);
          });
}

}


var areas = document.getElementsByClassName(area)
var categories = document.getElementsByClassName(category)
let urlStartArea = 'www.themealdb.com/api/json/v1/1/filter.php?a='
let urlStartCategory = 'www.themealdb.com/api/json/v1/1/filter.php?c='

    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then ((response) => response.json())
            .then(function(data) {
                console.log(data)
                for (let meal of data.meals){
                    categories.innerHTML += `
                    <a class="category dropdown-item"  style="text-decoration:none;" href="#" onclick = "rechercheC('${meal.strCategory}')">${meal.strCategory}</a>
                    `
                }
            })
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  }); 

    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')   
    .then ((response) => response.json())
            .then(function(data) {
                for (let meal of data.meals){
                    pays.innerHTML +=`
                    <a class="area dropdown-item"  style="text-decoration:none;" href="#" onclick = "rechercheP('${meal.strArea}')">${meal.strArea}</a>
                    `  
                }
            })
    .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  });
    function rechercheC(urlStart, param){
        const url = `${urlStart}${param}`;
        fetch(url)
        .then ((response) => response.json())
            .then(function(data) {
                console.log(data)
            })
            .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  });
   }

   function rechercheP(pays){
        const url = `${urlStart}${pays}`;
        fetch(url)
        .then ((response) => response.json())
            .then(function(data) {
                console.log(data)
            })
            .catch(function (error) {
    console.error('Il y a eu un problème avec l\'opération fetch : ' + error.message);
  });
   }
