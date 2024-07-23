import { Request, Response } from "express";
import { BooksService } from "../service/ProductService";

const booksService = new BooksService();

export async function criarLivros (req: Request, res: Response){
    try {
        const novoLivro = await booksService.cadastrarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                novoLivro:novoLivro
            }   
        );
    } catch (error: any) {
        if (error.message.includes("Livro com ISBN já cadastrado")){
            res.status(409).json({ message: error.message });
        }else{
            res.status(400).json({ message: error.message});
        }
    }
};

export async function atualizarLivros (req: Request, res: Response){
    try {
        const novoLivro = await booksService.atualizarLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                novoLivro:novoLivro
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
                mensagem:"Livro deletado com sucesso!",
                novoLivro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function consultarLivrosId (req: Request, res: Response){
    try {
        const novoLivro = await booksService.filtrarLivroId(req.query.id);
        if(!novoLivro){
            return res.status(404).json({ message: "Livro não encontrado" })
        }
        res.status(200).json(
            {
                mensagem:"Livro encontrado com sucesso!",
                novoLivro:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function consultarLivros(req: Request, res: Response){
    try {
        const novoLivro = await booksService.listarTodosLivros();
        res.status(200).json(
            {
                mensagem:"Todos os livros listados com sucesso!",
                novoLivro:novoLivro
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }

};
