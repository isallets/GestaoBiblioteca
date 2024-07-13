"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./controller/ProductController");
//atualizarProduto, deletarProduto, filtrarProduto, listarTodosProduto 
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.post("/api/books", ProductController_1.criarLivros);
/*
app.put("/api/books", atualizarLivros)
app.delete("/api/books", consultarLivros)
app.get("/api/books", consultarLivrosId)
app.get("/api/books", deletarLivros)
*/
app.listen(PORT, () => console.log("API online na porta: " + PORT));
