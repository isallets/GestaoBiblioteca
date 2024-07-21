import express from 'express';
import { criarLivros, atualizarLivros, deletarLivros, consultarLivros, consultarLivrosId} from './controller/ProductController';
//atualizarProduto, deletarProduto, filtrarProduto, listarTodosProduto 
const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/books", criarLivros);
app.put("/api/books", atualizarLivros);
app.delete("/api/books", consultarLivros);
app.get("/api/books/id", consultarLivrosId);
app.get("/api/books", deletarLivros);


app.listen(PORT, ()=> console.log("API online na porta: " + PORT));