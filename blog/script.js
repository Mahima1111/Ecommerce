const menuItems = [
  { id: 1, title: "Meals", category: "lunch", price: 220, img: "./sadhya.jpg", desc: "Traditional vegetarian feast." },
  { id: 2, title: "Masala Dosa", category: "breakfast", price: 80, img: "./Masala-Dosa.jpg", desc: "Fermented batter pancake with potato." },
  { id: 3, title: "Poori Masala", category: "breakfast", price: 60, img: "./poori-masala-kizhangu.webp", desc: "Deep fried bread with spicy mash." },
  { id: 4, title: "Veggie Pasta", category: "breakfast", price: 140, img: "./Veggie-Pasta.jpg", desc: "Pasta with seasonal vegetables." },
  { id: 5, title: "Alfaham Mandi", category: "dinner", price: 390, img: "./Alfaham mandi.jpg", desc: "Grilled chicken over flavored rice." },
  { id: 6, title: "Alfaham", category: "lunch", price: 300, img: "./Chicken Alfaham.jpg", desc: "Arabic grilled chicken dish." },
  { id: 7, title: "Grilled Chicken", category: "lunch", price: 290, img: "./grilled chicken.jpeg", desc: "Juicy grilled chicken." },
  { id: 8, title: "Biriyani", category: "dinner", price: 260, img: "./Biryani-min.jpg", desc: "Spiced rice with meat." }
];

const menuContainer = document.getElementById("menu-container");
const searchInput = document.getElementById("searchInput");
const sortMenu = document.getElementById("sortMenu");
const aboutSection = document.querySelector(".about");
const contactSection = document.querySelector(".contact-us");

let currentItems = [...menuItems];

renderItems(currentItems);

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const category = link.getAttribute("data-category");
    if (category === "about") {
      aboutSection.style.display = "block";
      contactSection.style.display = "none";
      renderItems([]);
    } else if (category === "contact") {
      contactSection.style.display = "block";
      aboutSection.style.display = "none";
      renderItems([]);
    } else {
      aboutSection.style.display = "none";
      contactSection.style.display = "none";
      currentItems = [...menuItems];
      applySearchAndSort();
    }
  });
});

searchInput.addEventListener("input", applySearchAndSort);
sortMenu.addEventListener("change", applySearchAndSort);

function renderItems(items) {
  menuContainer.innerHTML = items.map(item => `
    <article class="menu-item">
      <img src="${item.img}" alt="${item.title}" class="menu-img" />
      <div class="menu-info">
        <header class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">₹${item.price}</h4>
        </header>
        <p class="desc">${item.desc}</p>
      </div>
    </article>
  `).join('');
}

function applySearchAndSort() {
  let filtered = [...currentItems];
  const query = searchInput.value.toLowerCase();
  const sort = sortMenu.value;

  if (query) {
    filtered = filtered.filter(item => item.title.toLowerCase().includes(query));
  }

  if (sort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (["breakfast", "lunch", "dinner"].includes(sort)) {
    filtered = filtered.filter(item => item.category === sort);
  }

  renderItems(filtered);
}
