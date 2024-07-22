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
exports.BooksRepository = void 0;
const mysql_1 = require("../database/mysql");
const Product_1 = require("../model/Product");
class BooksRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS books.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(300) NOT NULL,
            publishedDate VARCHAR(10) NOT NULL,
            isbn VARCHAR(100) NOT NULL,
            pages INT NOT NULL,
            language VARCHAR(100) NOT NULL,
            publisher VARCHAR(200) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertBook(title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO books.Product (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, publishedDate, isbn, pages, language, publisher]);
                console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
                const books = new Product_1.Books(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise((resolve) => {
                    resolve(books);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o livro:', err);
                throw err;
            }
        });
    }
    updateBook(id, title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE books.Product set title = ?, author = ?, publishedDATE = ?, isbn = ?, pages = ?, language = ?, publisher = ? where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
                console.log('Produto atualizado com sucesso, ID: ', resultado);
                const books = new Product_1.Books(id, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise((resolve) => {
                    resolve(books);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o produto de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deleteBook(id, title, author, publishedDate, isbn, pages, language, publisher) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM books.Product where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro deletado com sucesso, ID: ', resultado);
                const books = new Product_1.Books(id, title, author, publishedDate, isbn, pages, language, publisher);
                return new Promise((resolve) => {
                    resolve(books);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o produto de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterBook(isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM books.Product where isbn = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [isbn]);
                console.log('Livro localizado com sucesso, ISBN: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o livro de ID ${isbn} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM books.Product";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao listar os livros gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.BooksRepository = BooksRepository;
