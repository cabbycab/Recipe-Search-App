// let recipe

let recipeData;

function handleGetData(event){
    event.preventDefault();
    
    const searchText = $("#search").val()
    $.ajax({url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?rapidapi-key=fed654fad0msh1de46f7bf7bac2ap1221e6jsn663f78c78a48&query=?=${searchText}`})
      .then(
        (data) => {
          recipeData = data;
          renderRecipe()
        },
        (error) => {
          console.log("bad request: ", error)
        });
  };

  $('form').on("submit", handleGetData)

  function renderRecipe(recipes) {
    let recipeHtml = recipeData.results.map(function(recipe) {
      return `
        <img id="image" src="https://spoonacular.com/recipeImages/${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>Ready in: ${recipe.readyInMinutes} minutes</p>
        <p>Servings: ${recipe.servings}</p>
        <a href="${recipe.sourceUrl}">Click Here for Recipe</a>
      `
    });
    $("main").html(recipeHtml)
  };
