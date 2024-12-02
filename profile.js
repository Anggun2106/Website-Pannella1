function validateForm(event) {
    event.preventDefault();

    // Ambil nilai input
    const inputUsername = document.getElementById("username").value.trim();
    const inputNoTelp = document.getElementById("notelp").value.trim();
    const inputGmail = document.getElementById("gmail").value.trim();
    const inputPassword = document.getElementById("password").value.trim();

    // Validasi input
    if (!inputUsername || !inputNoTelp || !inputGmail || !inputPassword) {
        showModal(); // Tampilkan modal jika ada input kosong
    } else {
        // Simpan data ke localStorage
        localStorage.setItem("username", inputUsername);
        localStorage.setItem("notelp", inputNoTelp);
        localStorage.setItem("gmail", inputGmail);
        localStorage.setItem("password", inputPassword);

        // Arahkan ke halaman profil
        window.location.href = "profile.html"; // Path relatif
    }
}

function showModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "flex"; // Tampilkan modal
    } else {
        console.error("Modal element not found");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none"; // Sembunyikan modal
    } else {
        console.error("Modal element not found");
    }
}

// Tambahkan event listener untuk tombol modal
document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);

window.onload = function () {
    // Ambil data dari localStorage
    const username = localStorage.getItem("username");
    const gmail = localStorage.getItem("gmail");
    const notelp = localStorage.getItem("notelp");

    // Dapatkan elemen berdasarkan ID
    const usernameElement = document.getElementById("usernameElement");
    const gmailElement = document.getElementById("gmailElement");
    const notelpElement = document.getElementById("notelpElement");

    // Tampilkan data di elemen
    if (usernameElement && username) {
        usernameElement.textContent = username;
    }

    if (gmailElement && gmail) {
        gmailElement.textContent = gmail;
    }

    if (notelpElement && notelp) {
        notelpElement.textContent = notelp;
    }
};