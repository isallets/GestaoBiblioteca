import { Books } from "../model/Product";
import { BooksRepository } from "../repository/ProductRepository";

export class BooksService{

    booksRepository: BooksRepository = new BooksRepository();

    async cadastrarLivro(livroData: any): Promise<Books> {
        const { title, author, publishedDate, isbn, pages, language, publisher} = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }

        const novoLivro =  await this.booksRepository.insertBook(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }
/*
    async atualizarProduto(produtoData: any): Promise<Product> {
        const { id, name, price } = produtoData;
        if(!name || !price || !id ){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.productRepository.updateProduct(id,name, price);
        console.log("Service - Update ", produto);
        return produto;
    }

    async deletarProduto(produtoData: any): Promise<Product> {
        const { id, name, price } = produtoData;
        if(!name || !price || !id ){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.productRepository.deleteProduct(id,name, price);
        console.log("Service - Delete ", produto);
        return produto;
    }

    async filtrarProduto(produtoData: any): Promise<Product> {
        if(!produtoData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(produtoData, 10);

        const produto =  await this.productRepository.filterProduct(id);
        console.log("Service - Filtrar", produto);
        return produto;
    }

    async listarTodosProdutos(): Promise<Product[]> {
        const produto =  await this.productRepository.filterAllProduct();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }
*/
}