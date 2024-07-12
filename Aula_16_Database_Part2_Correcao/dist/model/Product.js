"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id || 0;
        this.name = name || '';
        this.price = price || 0;
    }
}
exports.Product = Product;
