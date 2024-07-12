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
            pages NUMBER(9000) NOT NULL,
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
/*
    async updateProduct(id: number, name: string, price: number) :Promise<Product>{
        const query = "UPDATE vendas.product set name = ?, price = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [name, price, id]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            const product = new Product(id, name, price);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteProduct(id: number, name:string, price:number) :Promise<Product>{
        const query = "DELETE FROM vendas.product where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto deletado com sucesso, ID: ', resultado);
            const product = new Product(id, name, price);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterProduct(id: number) :Promise<Product>{
        const query = "SELECT * FROM vendas.product where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto localizado com sucesso, ID: ', resultado);
            return new Promise<Product>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllProduct() :Promise<Product[]>{
        const query = "SELECT * FROM vendas.product" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Product[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os produtos gerando o erro: ${err}`);
            throw err;
        }
    }
*/
    
}