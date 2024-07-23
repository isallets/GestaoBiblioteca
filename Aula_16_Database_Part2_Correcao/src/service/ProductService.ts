import { Books } from "../model/Product";
import { BooksRepository } from "../repository/ProductRepository";

export class BooksService{

    booksRepository: BooksRepository = new BooksRepository();

    async cadastrarLivro(livroData: any): Promise<Books> {
        const { title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }
        
       const livroRepetido =  await this.booksRepository.filterBookISBN(isbn);
        if (livroRepetido){
            throw new Error ("Livro já cadastrado!!!")
        }
        
        const novoLivro =  await this.booksRepository.insertBook(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async atualizarLivro(livroData: any): Promise<Books> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!id ||!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){
            throw new Error("Informações incompletas");
        }

        const book =  await this.booksRepository.updateBook(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", book);
        return book;
    }

    async deletarLivro(livroData: any): Promise<Books> {
        const {id, title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!id ||!title || !author || !publishedDate || !isbn || !pages || !language || !publisher){ 
            throw new Error("Informações incompletas");
        }

        const book =  await this.booksRepository.deleteBook(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete ", book);
        return book;
    }

    async filtrarLivroId(livroData: any): Promise<Books> {
        if(!livroData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(livroData, 10);

        const book =  await this.booksRepository.filterBookId(id);
        if(book.isbn == ''){
            throw new Error ("Livro não encontrado!")
        }
        console.log("Service - Filtrar", book);
        return book;
    }

    async listarTodosLivros(): Promise<Books[]> {
        const livro =  await this.booksRepository.filterAllBooks();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

}