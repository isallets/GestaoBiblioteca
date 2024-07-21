import { Request, Response } from "express";
import { BooksService } from "../service/ProductService";

const booksService = new BooksService();

export async function criarLivros (req: Request, res: Response){
    try {
        const novoLivro = await booksService.cadastrarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                livro:novoLivro
            }
            
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizarLivros (req: Request, res: Response){
    try {
        const novoLivro = await booksService.atualizarLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                livro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarLivros(req: Request, res: Response){
    try {
        const novoLivro = await booksService.deletarLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Produto deletado com sucesso!",
                livro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function consultarLivros (req: Request, res: Response){
    try {
        const novoLivro = await booksService.filtrarProduto(req.query.id);
        res.status(200).json(
            {
                mensagem:"Livro encontrado com sucesso!",
                livro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function consultarLivrosId (req: Request, res: Response){
    try {
        const novoLivro = await booksService.listarTodosProdutos();
        res.status(200).json(
            {
                mensagem:"Todos os livros listados com sucesso!",
                livro:novoLivro
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }

};
