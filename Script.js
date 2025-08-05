const products = [
  {
    name: "Neem Soap",
    category: "Soap",
    image: "images/neem-soap.jpg",
    description: "Cleanses and soothes irritated skin.",
    size: "100g",
    price: "PKR 450"
  },
  {
    name: "Hair Growth Oil",
    category: "Oil",
    image: "images/hair-oil.jpg",
    description: "Boosts growth with Blackseed and Amla.",
    size: "120ml",
    price: "PKR 799"
  },
  {
    name: "Amla Shampoo",
    category: "Shampoo",
    image: "images/amla-shampoo.jpg",
    description: "Strengthens roots and prevents hair fall.",
    size: "250ml",
    price: "PKR 990"
  },
  {
    name: "Glow Face Serum",
    category: "Serum",
    image: "images/glow-serum.jpg",
    description: "Brightens complexion and hydrates skin.",
    size: "30ml",
    price: "PKR 1050"
  }
];

function displayProducts(productArray) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  productArray.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <small>${p.size} | <strong>${p.price}</strong></small>
      </div>
    `;
  });
}

function filterCategory(cat) {
  const filtered = products.filter(p => p.category === cat);
  displayProducts(filtered);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Message sent successfully!";
  this.reset();
});

window.onload = () => displayProducts(products);
