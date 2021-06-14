/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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
}
