document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
  }

function renderBooks(json) {
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    document.body.appendChild(h2)
  })
}



// renderBooks(apiFetch);
