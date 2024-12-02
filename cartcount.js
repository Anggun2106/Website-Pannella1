function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Hitung total jumlah item di keranjang
    const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
    
    // Update teks cart count
    cartCountElement.textContent = `(${totalCount})`;
  }
  