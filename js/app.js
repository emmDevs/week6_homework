document.addEventListener("DOMContentLoaded", () => {
    console.log("dom has loaded");
    
    const form = document.querySelector("#form");
    form.addEventListener("submit", handleFormSubmit); 

    // const diet = document.querySelector("#diet");
    // diet.addEventListener("change", handleDietChange);

    const deleteAll = document.querySelector("#delete-all");
    deleteAll.addEventListener("click", handleDeleteAllClick);
})

const handleFormSubmit = function (event) {
    event.preventDefault();

    const endangeredAnimalsItem = createEndangeredAnimalsItem(event.target);
    const endangeredAnimalsList = document.querySelector("#endangered-animals-list");
    endangeredAnimalsList.appendChild(endangeredAnimalsItem);

    event.target.reset();
}

const createEndangeredAnimalsItem = function (form) {
    const endangeredAnimalsItem = document.createElement("li");
    endangeredAnimalsItem.classList.add("endangered-animals-item");

    const name = document.createElement("h2");
    name.textContent = form.name.value;
    endangeredAnimalsItem.appendChild(name);

    const species = document.createElement("h3");
    species.textContent = form.species.value;
    endangeredAnimalsItem.appendChild(species);

    const continent = document.createElement("p");
    continent.textContent = form.continent.value;
    endangeredAnimalsItem.appendChild(continent);

    const diet = document.createElement("p");
    diet.textContent = document.querySelector('input[name="diet"]:checked').value
    endangeredAnimalsItem.appendChild(diet)
    
    

    return endangeredAnimalsItem;

}

const handleDeleteAllClick = function (event) {
    const endangeredAnimalsList = document.querySelector("#endangered-animals-list");
    endangeredAnimalsList.innerHTML = "";
}
