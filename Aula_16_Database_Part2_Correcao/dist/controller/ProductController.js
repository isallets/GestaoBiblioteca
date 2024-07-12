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
exports.cadastrarProduto = cadastrarProduto;
exports.atualizarProduto = atualizarProduto;
exports.deletarProduto = deletarProduto;
exports.filtrarProduto = filtrarProduto;
exports.listarTodosProduto = listarTodosProduto;
const ProductService_1 = require("../service/ProductService");
const productService = new ProductService_1.ProductService();
function cadastrarProduto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoProduto = yield productService.cadastrarProduto(req.body);
            res.status(201).json({
                mensagem: "Produto adicionado com sucesso!",
                produto: novoProduto
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function atualizarProduto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produto = yield productService.atualizarProduto(req.body);
            res.status(200).json({
                mensagem: "Produto atualizado com sucesso!",
                produto: produto
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarProduto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produto = yield productService.deletarProduto(req.body);
            res.status(200).json({
                mensagem: "Produto deletado com sucesso!",
                produto: produto
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function filtrarProduto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produto = yield productService.filtrarProduto(req.query.id);
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                produto: produto
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function listarTodosProduto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield productService.listarTodosProdutos();
            res.status(200).json({
                mensagem: "Produtos listados com sucesso!",
                produtos: produtos
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
