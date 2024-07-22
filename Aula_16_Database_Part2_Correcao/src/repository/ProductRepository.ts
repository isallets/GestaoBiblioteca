import { executarComandoSQL } from "../database/mysql";
import { Books } from "../model/Product";

export class BooksRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS books.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(300) NOT NULL,
            publishedDate VARCHAR(10) NOT NULL,
            isbn VARCHAR(100) NOT NULL,
            pages INT NOT NULL,
            language VARCHAR(100) NOT NULL,
            publisher VARCHAR(200) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertBook(title: string, author: string, publishedDate:string, isbn: string, pages: number, language: string, publisher: string) :Promise<Books>{
        const query = "INSERT INTO books.Product (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const books = new Books(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Books>((resolve)=>{
                resolve(books);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async updateBook(id: string, title: string, author: string, publishedDate:string, isbn: string, pages: number, language: string, publisher: string) :Promise<Books>{
        const query = "UPDATE books.Product set title = ?, author = ?, publishedDATE = ?, isbn = ?, pages = ?, language = ?, publisher = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            const books = new Books(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Books>((resolve)=>{
                resolve(books);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteBook(id: string, title: string, author: string, publishedDate:string, isbn: string, pages: number, language: string, publisher: string) :Promise<Books>{
        const query = "DELETE FROM books.Product where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro deletado com sucesso, ID: ', resultado);
            const books = new Books (id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Books>((resolve)=>{
                resolve(books);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterBookId(id: number) :Promise<Books>{
        const query = "SELECT * FROM books.Product where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro localizado com sucesso, id: ', resultado);
            return new Promise<Books>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterBookISBN(isbn: number) :Promise<Books>{
        const query = "SELECT * FROM books.Product where isbn = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [isbn]);
            console.log('Livro localizado com sucesso, ISBN: ', resultado);
            return new Promise<Books>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${isbn} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllBooks() :Promise<Books[]>{
        const query = "SELECT * FROM books.Product" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Books[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    
}