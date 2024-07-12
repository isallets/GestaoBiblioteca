"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./controller/ProductController");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.post("/api/product", ProductController_1.cadastrarProduto);
app.put("/api/product", ProductController_1.atualizarProduto);
app.delete("/api/product", ProductController_1.deletarProduto);
app.get("/api/product", ProductController_1.filtrarProduto);
app.get("/api/products", ProductController_1.listarTodosProduto);
app.listen(PORT, () => console.log("API online na porta: " + PORT));
