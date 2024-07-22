import express from 'express';
import { criarLivros, atualizarLivros, deletarLivros, consultarLivros, consultarLivrosId} from './controller/ProductController';

const app = express();

const PORT = 3100;

app.use(express.json());

app.post("/api/books", criarLivros);
app.put("/api/books", atualizarLivros);
app.delete("/api/books/todos", consultarLivros);
app.get("/api/books", consultarLivrosId);
app.get("/api/books", deletarLivros);


app.listen(PORT, ()=> console.log("API online na porta: " + PORT));