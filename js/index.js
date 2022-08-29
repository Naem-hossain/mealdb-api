


const loadData = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}


const displayData = meals =>{
    // for(const meal of meals){
    //     console.log(meal)
    // }
    const mainDiv = document.getElementById('meal-container')
    mainDiv.innerHTML = ``;
    meals.forEach(meal => {
      
        const {strMeal,strMealThumb,strInstructions,idMeal} = meal;
      
         const div = document.createElement('div');
        //  div.innerHTML = ``;
         div.classList.add('col');
         div.innerHTML =`
         <div class="card" onclick="loadDataById(${idMeal})">
         <img class="img-fluid" src="${strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${strMeal}</h5>
           <p class="card-text">${strInstructions.slice(0,200)}</p>
         </div>
       </div>
         `
         mainDiv.appendChild(div)
        
        
    })
}
const loadDataById = (mealId) => {
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDataById(data.meals[0]))
}
const displayDataById = (deatils)=>{
    const {strMealThumb, strMeal,strInstructions} = deatils;
    const deatilaDiv = document.getElementById('deatail-div');
    deatilaDiv.innerHTML = ``;
    const div = document.createElement('div')
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
    <img class="img-fluid" src="${strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${strMeal}</h5>
      <p class="card-text">${strInstructions.slice(0,200)}</p>
    </div>
  </div>
       
    `
    deatilaDiv.appendChild(div)

}

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const getInputValue = ()=> {
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    getDataByName(inputValue)
    input.value ='';
}
const getDataByName = inputValue => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.meals))
}

loadData(' ')