document.addEventListener("DOMContentLoaded", () => {
    console.log("dom has loaded");
    
    //add event listener for form being submitted
    const form = document.querySelector("#form");
    form.addEventListener("submit", handleFormSubmit); 

    //add event listener for delete all button being clicked
    const deleteAll = document.querySelector("#delete-all");
    deleteAll.addEventListener("click", handleDeleteAllClick);

    //add event listener for search filter being input
    const searchBar = document.forms['search'].querySelector('input');
    searchBar.addEventListener('keyup', handleSearchKeyup);

})

//create the li and attach to the ul
const handleFormSubmit = function (event) {
    event.preventDefault();

    const endangeredAnimalsItem = createEndangeredAnimalsItem(event.target);
    const endangeredAnimalsList = document.querySelector("#endangered-animals-list");
    endangeredAnimalsList.appendChild(endangeredAnimalsItem);

    event.target.reset();
}

// create and append each item that will be part of the li
const createEndangeredAnimalsItem = function (form) {
    const endangeredAnimalsItem = document.createElement("li");
    endangeredAnimalsItem.classList.add("endangered-animals-item");
//name of animal
    const name = document.createElement("h2");
    name.textContent = form.name.value;
    endangeredAnimalsItem.appendChild(name);
//name of species
    const species = document.createElement("h3");
    species.textContent = form.species.value;
    endangeredAnimalsItem.appendChild(species);
//select continent
    const continent = document.createElement("p");
    continent.textContent = form.continent.value;
    endangeredAnimalsItem.appendChild(continent);
//select diet
    const diet = document.createElement("p");
    diet.textContent = document.querySelector('input[name="diet"]:checked').value;
    endangeredAnimalsItem.appendChild(diet)
//select habitat
    const habitat = document.createElement("p");
    habitat.textContent = document.querySelector('input[class="habitat"]:checked').value;
    endangeredAnimalsItem.appendChild(habitat);
    
    
    return endangeredAnimalsItem;  
}

// delete all event being handled
const handleDeleteAllClick = function (event) {
    const endangeredAnimalsList = document.querySelector("#endangered-animals-list");
    endangeredAnimalsList.innerHTML = "";
}

// search filter
const handleSearchKeyup = function(event){
    const list = document.querySelector('#endangered-animals-list')
    const term = event.target.value.toLowerCase();
    const animals = list.getElementsByTagName('li');
    Array.from(animals).forEach(function(animal){
        const name = animal.firstElementChild.textContent;
        if(name.toLowerCase().indexOf(term) !== -1){
            animal.style.display = 'block';
        }else{
            animal.style.display = 'none';
        }
    })
}

//on mouse over event
const changeText = function(){
    const text = document.querySelector('#h1').style.color = 'red';
}

//on mouse out event
const changeTextBack = function(){
    const text = document.querySelector('#h1').style.color = '';
}