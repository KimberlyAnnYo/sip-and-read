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

//Punk API - start finding a random beer 
// fetch ('https://api.punkapi.com/v2/beers/random')
//   .then(Response => {
// 	return Response.json()
//   })
//   .then(data => {
// 	  console.log(data);
//   const name = data[0].name
//   console.log(name);
//   });

function getBeer() {
	var beerApi = "https://api.punkapi.com/v2/beers/random";
	fetch(beerApi).then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
	})
	
};

getBeer();