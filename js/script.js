// let recipe

function handleGetData(event){
    event.preventDefault();
    
    const searchText = $("#search").val()
    $.ajax({url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?rapidapi-key=fed654fad0msh1de46f7bf7bac2ap1221e6jsn663f78c78a48&query=?=${searchText}`})
      .then(
        (data) => {
          console.log(data);
          $("#title").text(data.title)
          $("#ready").text(data.readyInMinutes)
          $("#servings").text(data.servings)
          $("#url").text(data.sourceUrl)
          $("#image").attr("src", data.image)
        },
        (error) => {
          console.log("bad request: ", error)
        }
      )
  }
  $('form').on("submit", handleGetData)

//   function renderRecipe(recipes) {

//   }