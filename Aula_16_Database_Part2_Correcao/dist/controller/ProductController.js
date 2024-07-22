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
exports.criarLivros = criarLivros;
exports.atualizarLivros = atualizarLivros;
exports.deletarLivros = deletarLivros;
exports.consultarLivrosId = consultarLivrosId;
exports.consultarLivros = consultarLivros;
const ProductService_1 = require("../service/ProductService");
const booksService = new ProductService_1.BooksService();
function criarLivros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield booksService.cadastrarLivro(req.body);
            res.status(201).json({
                mensagem: "Livro adicionado com sucesso!",
                novoLivro: novoLivro
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarLivros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield booksService.atualizarLivro(req.body);
            res.status(200).json({
                mensagem: "Livro atualizado com sucesso!",
                novoLivro: novoLivro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarLivros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield booksService.deletarLivro(req.body);
            res.status(200).json({
                mensagem: "Livro deletado com sucesso!",
                novoLivro: novoLivro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function consultarLivrosId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield booksService.filtrarLivroId(req.query.id);
            res.status(200).json({
                mensagem: "Livro encontrado com sucesso!",
                novoLivro: novoLivro
            });
        }
        catch (error) {
            res.status(404).json({ message: error.message });
        }
    });
}
;
function consultarLivros(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoLivro = yield booksService.listarTodosLivros();
            res.status(200).json({
                mensagem: "Todos os livros listados com sucesso!",
                novoLivro: novoLivro
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
