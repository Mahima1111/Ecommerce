// Navigation logic
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Book display logic
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

function loadBooks() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  bookList.innerHTML = "";

  books
    .filter(book =>
      (!selectedGenre || book.genre === selectedGenre) &&
      book.title.toLowerCase().includes(searchText)
    )
    .forEach(book => {
      const div = document.createElement("div");
      div.className = "book-item";
      div.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Rating:</strong> ${book.rating} ⭐</p>
      `;
      bookList.appendChild(div);
    });
}

searchInput?.addEventListener("input", loadBooks);
genreFilter?.addEventListener("change", loadBooks);
window.addEventListener("load", loadBooks);

// Add book logic
document.getElementById("addBookForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    rating: document.getElementById("rating").value,
  };

  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  alert("Book added!");
  this.reset();
  loadBooks();
});

// Contact form logic
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Message sent!");
  this.reset();
});
