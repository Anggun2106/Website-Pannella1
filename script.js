
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(productName) {
  cart.push(productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} berhasil ditambahkan ke keranjang!`);
}


function displayCartItems() {
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;

  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Keranjang kosong</li>';
  } else {
    cart.forEach((item, index) => {
      cartItems.innerHTML += `<li>${item} <button onclick="removeFromCart(${index})">Hapus</button></li>`;
    });
  }
}


function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}


document.addEventListener('DOMContentLoaded', displayCartItems);
