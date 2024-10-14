const Service = require('./service'); // Memanggil modul Service

// Inisialisasi Service
const service = new Service();

// Menguji Service untuk mendapatkan semua item
console.log('Service - Semua item:', service.getAllItems());

// Menguji Service untuk mendapatkan item berdasarkan ID
console.log('Service - Ambil item dengan ID 1:', service.getItemById(1));
console.log('Service - Ambil item dengan ID 3 (dari Secondary Repository):', service.getItemById(3));

// Menguji Service untuk menambahkan item baru
console.log('Service - Tambah item baru:', service.addItem('Item 5'));
console.log('Service - Semua item setelah menambah:', service.getAllItems());
