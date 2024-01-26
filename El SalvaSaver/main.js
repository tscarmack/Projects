function displayRecipes() {
    let recipeDisplay = document.getElementById('recipeDisplay')
    recipeDisplay.innerHTML = ''

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let recipe = JSON.parse(localStorage.getItem(key))

        recipeDisplay.innerHTML += 'Title: ' + recipe.title + '<br>'
        
        recipeDisplay.innerHTML += 'Ingredients: <ul>'
        recipe.ingredients.split('\n').forEach(ingredient => {
            if (ingredient.trim() !== '') {
                recipeDisplay.innerHTML += '<li>' + ingredient.trim() + '</li>'
            }
        });
        recipeDisplay.innerHTML += '</ul>'
        
        recipeDisplay.innerHTML += 'Instructions: <ol>'
        recipe.instructions.split('\n').forEach(instruction => {
            if (instruction.trim() !== '') {
                recipeDisplay.innerHTML += '<li>' + instruction.trim() + '</li>'
            }
        });
        recipeDisplay.innerHTML += '</ol>'
        
        recipeDisplay.innerHTML += '<br>'
    }
}

document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault()

    let title = document.getElementById('title').value
    let ingredients = document.getElementById('ingredients').value
    let instructions = document.getElementById('instructions').value

    let recipe = {
        title: title,
        ingredients: ingredients,
        instructions: instructions,
    }
    localStorage.setItem(title, JSON.stringify(recipe))

    displayRecipes()
})

window.addEventListener('load', displayRecipes)
