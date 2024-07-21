import { Books } from "../model/Product";
import { BooksRepository } from "../repository/ProductRepository";

export class BooksService{

    booksRepository: BooksRepository = new BooksRepository();

    async cadastrarLivro(livroData: any): Promise<Books> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }
        
        const livroRepetido =  await this.booksRepository.filterBook(id);
        if (livroRepetido){
            throw new Error ("Livro já cadastrado!!!");
        }

        const novoLivro =  await this.booksRepository.insertBook(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(produtoData: any): Promise<Books> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = produtoData;
        if(!id ||!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const book =  await this.booksRepository.updateBook(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", book);
        return book;
    }

    async deletarLivro(produtoData: any): Promise<Books> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = produtoData;
        if(!id ||!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){ 
            throw new Error("Informações incompletas");
        }

        const book =  await this.booksRepository.deleteBook(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete ", book);
        return book;
    }

    async filtrarProduto(produtoData: any): Promise<Books> {
        if(!produtoData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(produtoData, 10);

        const produto =  await this.booksRepository.filterBook(id);
        console.log("Service - Filtrar", produto);
        return produto;
    }

    async listarTodosProdutos(): Promise<Books[]> {
        const produto =  await this.booksRepository.filterAllBooks();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }

}