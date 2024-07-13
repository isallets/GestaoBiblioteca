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
exports.BooksService = void 0;
const ProductRepository_1 = require("../repository/ProductRepository");
class BooksService {
    constructor() {
        this.booksRepository = new ProductRepository_1.BooksRepository();
        /*
            async atualizarProduto(produtoData: any): Promise<Product> {
                const { id, name, price } = produtoData;
                if(!name || !price || !id ){
                    throw new Error("Informações incompletas");
                }
        
                const produto =  await this.productRepository.updateProduct(id,name, price);
                console.log("Service - Update ", produto);
                return produto;
            }
        
            async deletarProduto(produtoData: any): Promise<Product> {
                const { id, name, price } = produtoData;
                if(!name || !price || !id ){
                    throw new Error("Informações incompletas");
                }
        
                const produto =  await this.productRepository.deleteProduct(id,name, price);
                console.log("Service - Delete ", produto);
                return produto;
            }
        
            async filtrarProduto(produtoData: any): Promise<Product> {
                if(!produtoData ){
                    throw new Error("Informações incompletas");
                }
                const id = parseInt(produtoData, 10);
        
                const produto =  await this.productRepository.filterProduct(id);
                console.log("Service - Filtrar", produto);
                return produto;
            }
        
            async listarTodosProdutos(): Promise<Product[]> {
                const produto =  await this.productRepository.filterAllProduct();
                console.log("Service - Filtrar Todos", produto);
                return produto;
            }
        */
    }
    cadastrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
            if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Informações incompletas");
            }
            const novoLivro = yield this.booksRepository.insertBook(title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        });
    }
}
exports.BooksService = BooksService;
