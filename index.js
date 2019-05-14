document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()


})

function fetchBooks() {
return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(json=> renderBooks(json))
}

function renderBooks(json) {
  const body = document.querySelector('body')

  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    body.appendChild(h2)
  })
}
