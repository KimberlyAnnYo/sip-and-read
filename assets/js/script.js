// create variables and grab by id
var books = document.getElementById("books")
var beer = document.getElementById("beer")

//API URL for google books.
let apiUrl = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

// API Key for google books
let APIkey = "AIzaSyAKZodEhFbkVKGFt3yykb7Sxeem5UZ0Ni0"

// make request to url
fetch(apiUrl)
        
.then(function(response) {
// request was successful
    if (response.ok) {
        response.json().then(function(data) {
            displadyBooks(data);
        });
    // request fails
    } else {
        alert("Error: " + response.statusText);
    }
})  

.catch(function(error) {
    alert("Unable to connect to Google Books");
})

$("#")