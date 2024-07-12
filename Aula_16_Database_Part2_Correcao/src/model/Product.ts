export class Books{
    id: string;
    title: string;
    author: string;
    publishedDate: string;
    isbn: string;
    pages: number;
    language: string;
    publisher: string;

    constructor(id: string, title:string, author:string, publishedDate:string, isbn: string, pages: number, language: string, publisher: string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.isbn = isbn;
        this.pages = pages;
        this.language = language;
        this.publisher = publisher;
    }
}