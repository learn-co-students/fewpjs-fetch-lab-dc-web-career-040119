function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(json => renderBooks(json))
}

function renderBooks(json) {
  console.log("we in here")
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// function getPosts(){} 

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
