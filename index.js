function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(renderBooks(json))
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  return main
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

