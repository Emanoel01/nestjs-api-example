/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from 'src/database/interfaces/books.interface';
import { BooksService } from 'src/services/books/books.service';
import { BookDTO } from '../../DTO/books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<BookDTO[]> {
    return await this.bookService.getAllBooks();
  }

  @Get(':bookID')
  async getBookByID(@Param('bookID') bookID: string): Promise<Book> {
    return await this.bookService.getBookByID(bookID);
  }

  @Post()
  async saveBooks(@Body() newBook: BookDTO): Promise<BookDTO> {
    return await this.bookService.saveBook(newBook);
  }

  @Patch(':bookID')
  async updateBook(@Param('bookID') bookID: string, @Body() newBook: BookDTO): Promise<Book> {
    return await this.bookService.updateBookByID(bookID, newBook)
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID: string): Promise<Book> {
    return await this.bookService.deleteBook(bookID);
  }
}
