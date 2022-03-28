// Event listeners for the search button
document.querySelector('#submit-button').addEventListener('click', searchBook);

// When user inputs the search bar and clicked search button, start searching
function searchBook(event) {
	let query = document.querySelector('#search-input').value;
	// Initiate the fetch API
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
      	// Filter the search results by author, title, and subtitle
      	let output = '';
      	data.items.forEach(book => {
      		output += `
          <div class="results-box">
      		<ul>
            <img src= ${book.volumeInfo.imageLinks.smallThumbnail}>
	      		<li><b>Title:</b> ${book.volumeInfo.title}</li>
	      		<li><b>Author:</b> ${book.volumeInfo.authors}</li>
            <a href=${book.volumeInfo.canonicalVolumeLink}><button class="book-info"><b>See this book</b></button></a>
      		</ul>
          </div>
      		`;
      	});
      	// Display the search result
    		document.querySelector("#output").innerHTML = output;
      })
      // Throw an error message when something went wrong during the search
      .catch((error) => console.log(error));

      // Display "Search results of" text when clicked the search button
	  document.querySelector('.text').innerHTML = `Search results of: "${query}"`
	}

// Start searching the lists when user clicks entry key
document.querySelector("#search-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.querySelector("#submit-button").click();
    }
});

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayCocktail(data) {
	const cocktail = data.drinks[0];
	const cocktailDiv = document.getElementById("cocktail");
	const cocktailName = cocktail.strDrink;
	const heading = document.createElement("h1");
	heading.innerHTML = cocktailName;
	cocktailDiv.appendChild(heading);
	const cocktailImg = document.createElement("img");
	cocktailImg.src = cocktail.strDrinkThumb;
	cocktailDiv.appendChild(cocktailImg);
	document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
	const cocktailIngredients = document.createElement("ul");
	cocktailDiv.appendChild(cocktailIngredients);  
	
	const getIngredients = Object.keys(cocktail)
	  .filter(function (ingredient) {
		return ingredient.indexOf("strIngredient") == 0;
	  })
	  .reduce(function (ingredients, ingredient) {
		if (cocktail[ingredient] != null) {
		  ingredients[ingredient] = cocktail[ingredient];
		}
		return ingredients;
	  }, {});
  
	for (let key in getIngredients) {
	  let value = getIngredients[key];
	  listItem = document.createElement("li");
	  listItem.innerHTML = value;
	  cocktailIngredients.appendChild(listItem);
	}
  }   






