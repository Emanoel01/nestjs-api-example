/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { Book } from 'src/database/interfaces/books.interface';
import { BookRepository } from 'src/database/repositorys/book.repoository';
import { BookDTO } from 'src/DTO/books.dto';

@Injectable()
export class BooksService {
  constructor(
    private readonly bookRepository: BookRepository
  ){}

  async saveBook(newBook: BookDTO): Promise<BookDTO> {
    return await this.bookRepository.saveBook(newBook)
  }

  async getAllBooks(): Promise<BookDTO[]>{
    return await this.bookRepository.getAllBooks();
  }

  async getBookByID(bookID: string): Promise<Book>{
    try{
      return await this.bookRepository.getBookByID(bookID)
    }catch(e){
      throw new BadRequestException('THERE ARE NO RESULTS WITH THIS ID');
    }
  }

  async deleteBook(bookID: string): Promise<Book> {
    try{
      return await this.bookRepository.deleteBook(bookID);
    }catch(e){
      throw new BadRequestException('This Book does not exist')
    }
  }

  async updateBookByID(bookID: string, newBook: BookDTO): Promise<Book>{
    const existBook = await this.bookRepository.getBookByID(bookID)

    if(!existBook)
      throw new BadRequestException('THERE ARE NO BOOK WITH THIS ID')

    return await this.bookRepository.updateBookByID(bookID, newBook)
  }
}
