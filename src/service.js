// src/service.js
class Service {
    constructor() {
        this.repository = null; // Akan diset dari luar
    }

    getAllItems() {
        return this.repository.getAllItems();
    }

    getItemById(id) {
        const item = this.repository.getItemById(id);
        if (!item) {
            throw new Error('Item not found');
        }
        return item;
    }

    addItem(name) {
        if (!this.repository) {
            throw new Error('Repository not set'); // Periksa jika repository diset
        }
        const newItem = { id: this.repository.getAllItems().length + 1, name }; // Menggunakan getAllItems untuk ID
        return this.repository.addItem(newItem);
    }

    removeItemById(id) {
        return this.repository.removeItemById(id);
    }
}

module.exports = Service;
