document.getElementById('confirmButton').addEventListener('click', function () {
    const nama = document.getElementById('nama').value;
    const pin = document.getElementById('pin').value;
    const noRekening = document.getElementById('noRekening').value;
    const pembayaran = document.getElementById('Pembayaran').value;
    const tanggal = document.getElementById('tanggal').value;
    const bulan = document.getElementById('bulan').value;
    const tahun = document.getElementById('tahun').value;
    const messageElement = document.getElementById('message');
  
    // Validasi sederhana
    if (nama === '' || pin === '' || noRekening === '' || pembayaran === '') {
      messageElement.style.color = 'red';
      messageElement.textContent = 'Harap lengkapi semua data!';
    } else if (pin.length < 4) {
      messageElement.style.color = 'red';
      messageElement.textContent = 'PIN harus terdiri dari minimal 4 karakter!';
    } else {
      // Jika validasi berhasil
      const tanggalPembayaran = `${tanggal} ${bulan} ${tahun}`;
      messageElement.style.color = 'green';
      messageElement.textContent = `Pembayaran atas nama ${nama} sebesar ${pembayaran} untuk rekening ${noRekening} berhasil pada tanggal ${tanggalPembayaran}.`;
  
      // Tampilkan pesan sukses
      setTimeout(() => {
        alert('OK! Pembayaran berhasil. Anda akan diarahkan ke beranda.');
        window.location.href = 'home.html'; // Ganti 'index.html' dengan URL beranda Anda
      }, 1000); // Tunggu 1 detik sebelum kembali ke beranda
    }
  });
  