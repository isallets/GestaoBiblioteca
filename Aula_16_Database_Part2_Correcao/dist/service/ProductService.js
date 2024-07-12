"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price } = produtoData;
            if (!name || !price) {
                throw new Error("Informações incompletas");
            }
            const novoProduto = yield this.productRepository.insertProduct(name, price);
            console.log("Service - Insert ", novoProduto);
            return novoProduto;
        });
    }
    atualizarProduto(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, price } = produtoData;
            if (!name || !price || !id) {
                throw new Error("Informações incompletas");
            }
            const produto = yield this.productRepository.updateProduct(id, name, price);
            console.log("Service - Update ", produto);
            return produto;
        });
    }
    deletarProduto(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, price } = produtoData;
            if (!name || !price || !id) {
                throw new Error("Informações incompletas");
            }
            const produto = yield this.productRepository.deleteProduct(id, name, price);
            console.log("Service - Delete ", produto);
            return produto;
        });
    }
    filtrarProduto(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!produtoData) {
                throw new Error("Informações incompletas");
            }
            const id = parseInt(produtoData, 10);
            const produto = yield this.productRepository.filterProduct(id);
            console.log("Service - Filtrar", produto);
            return produto;
        });
    }
    listarTodosProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield this.productRepository.filterAllProduct();
            console.log("Service - Filtrar Todos", produto);
            return produto;
        });
    }
}
exports.ProductService = ProductService;
