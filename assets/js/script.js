// Event listeners for the search button
document.querySelector('#submit-button').addEventListener('click', searchBook);
//search button

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

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

var getBeer = function(){
	var beerApi = "https://api.punkapi.com/v2/beers/random";
	fetch(beerApi).then(function(response) {
	// request was successful
	  if (response.ok) {
		response.json().then(function(data) {
			console.log(data);
			var beerName = data[0].name;
			var beerDescription = data[0].description;
			var beerAbv = data[0].abv
			var beerImg = data[0].image_url
			console.log(beerName);
			console.log(beerDescription);
			console.log(beerAbv);
		});
	  }
	  else {
	  //If not successful redirect back to homepage
	  document.location.replace("./index.html");
	  }
});
}

getBeer();
