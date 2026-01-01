// Mock Data Products
const products = [
  {
    id: 1,
    name: "Infused Water Original",
    category: "infused",
    price: 15000,
    image: "img/menu/infused.jpg",
  },
  {
    id: 2,
    name: "Kopi Kurma Original",
    category: "coffee",
    price: 10000,
    image: "img/menu/cofe.jpg",
  },
  {
    id: 3,
    name: "Infused Water Lemon",
    category: "infused",
    price: 18000,
    image: "img/menu/infused.jpg",
  },
  {
    id: 4,
    name: "Kopi Kurma Latte",
    category: "coffee",
    price: 12000,
    image: "img/menu/cofe.jpg",
  },
  {
    id: 5,
    name: "Infused Water Mint",
    category: "infused",
    price: 16000,
    image: "img/menu/infused.jpg",
  },
  {
    id: 6,
    name: "Kopi Kurma Aren",
    category: "coffee",
    price: 13000,
    image: "img/menu/cofe.jpg",
  },
];

const productContainer = document.getElementById("product-container");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const priceValue = document.getElementById("price-value");

// Format Currency
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Render Products
function renderProducts(productsToRender) {
  productContainer.innerHTML = "";
  
  if (productsToRender.length === 0) {
    productContainer.innerHTML = "<p>Tidak ada produk yang ditemukan.</p>";
    return;
  }

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${formatRupiah(product.price)}</p>
      <button>Tambah ke Keranjang</button>
    `;

    productContainer.appendChild(productCard);
  });
}

// Filter Function
function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const maxPrice = parseInt(priceFilter.value);

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const isPriceMatch = product.price <= maxPrice;

    return isCategoryMatch && isPriceMatch;
  });

  renderProducts(filteredProducts);
}

// Event Listeners
categoryFilter.addEventListener("change", filterProducts);

priceFilter.addEventListener("input", function () {
  priceValue.textContent = this.value;
  filterProducts();
});

// Initial Render
renderProducts(products);
