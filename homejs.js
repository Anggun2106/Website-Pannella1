// Ambil elemen tombol "Add to Cart"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Keranjang kosong diinisialisasi (jika tidak ada keranjang di localStorage)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(product) {
  // Tambahkan produk ke array keranjang
  cart.push(product);

  // Simpan keranjang ke localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`Produk "${product.name}" berhasil ditambahkan ke keranjang!`);
}

// Tambahkan event listener ke semua tombol "Add to Cart"
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ambil data produk dari atribut tombol
    const product = {
      id: button.getAttribute("data-id"),
      name: button.getAttribute("data-name"),
      price: parseInt(button.getAttribute("data-price")),
      quantity: 1, // Default jumlah produk 1
    };

    // Tambahkan ke keranjang
    addToCart(product);
  });
});


