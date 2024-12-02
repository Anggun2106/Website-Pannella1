// Get DOM elements
const cartItemsContainer = document.getElementById("cart-items");
const itemCount = document.getElementById("item-count");
const subtotalElement = document.getElementById("subtotal");
const totalPriceElement = document.getElementById("total-price");
const shippingCost = 13000;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart">Tidak ada produk di keranjang</p>`;
  } else {
    cart.forEach((item, index) => {
      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <p>${item.name}</p>
          <p>Rp ${item.price.toLocaleString()}</p>
          <button onclick="removeFromCart(${index})">Hapus</button>
        </div>
      `;
    });
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = subtotal + shippingCost;

  itemCount.textContent = `(${cart.length})`;
  subtotalElement.textContent = `Rp ${subtotal.toLocaleString()}`;
  totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;
}

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      id: button.getAttribute("data-id"),
      name: button.getAttribute("data-name"),
      price: parseInt(button.getAttribute("data-price")),
    };
    addToCart(product);
  });
});

// Initialize cart UI
updateCartUI();
