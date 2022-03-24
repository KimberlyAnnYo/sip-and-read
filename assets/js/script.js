let books = {
  "apiKey": "AIzaSyAKZodEhFbkVKGFt3yykb7Sxeem5UZ0Ni0",
  fetchBooks: function() {
      fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyAKZodEhFbkVKGFt3yykb7Sxeem5UZ0Ni0" 
      )
      .then((response) => response.json())
      .then((data) => this.displayBooks(data));
  }, 
  displayBooks: function(data) {
      const {name} = data;
      const { search } = data.books[0];
    
      
      document.querySelector(".tbox") .innerText = "books" + name;
      document.querySelector(".search").innerText= search;
      
  },
  search: function() {
      this.fetchBooks(document.querySelector(".search-bar").value);
  }
};
document
.querySelector(".search button")
.addEventListener("click", function () {
books.search();
} );

document.querySelector(".search").addEventListener("keyup", function(event) {
if (event.key === "Enter") {
  books.search();
}
})

books.fetchBooks("");
