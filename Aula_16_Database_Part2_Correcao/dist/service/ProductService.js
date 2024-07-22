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
    }
    cadastrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
            if (!title || !author || !publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Informações incompletas");
            }
            const livroRepetido = yield this.booksRepository.filterBook(isbn);
            if (livroRepetido.isbn = isbn) {
                throw new Error("Livro já cadastrado!!!");
            }
            const novoLivro = yield this.booksRepository.insertBook(title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        });
    }
    atualizarLivro(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, publishedDate, isbn, pages, language, publisher } = produtoData;
            if (!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Informações incompletas");
            }
            const book = yield this.booksRepository.updateBook(id, title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Update ", book);
            return book;
        });
    }
    deletarLivro(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, publishedDate, isbn, pages, language, publisher } = produtoData;
            if (!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Informações incompletas");
            }
            const book = yield this.booksRepository.deleteBook(id, title, author, publishedDate, isbn, pages, language, publisher);
            console.log("Service - Delete ", book);
            return book;
        });
    }
    filtrarLivro(produtoData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!produtoData) {
                throw new Error("Informações incompletas");
            }
            const id = parseInt(produtoData, 10);
            const produto = yield this.booksRepository.filterBook(id);
            console.log("Service - Filtrar", produto);
            return produto;
        });
    }
    listarTodosLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield this.booksRepository.filterAllBooks();
            console.log("Service - Filtrar Todos", produto);
            return produto;
        });
    }
}
exports.BooksService = BooksService;
