import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BooksService } from 'src/services/books/books.service';
import { BookDTO } from '../../DTO/books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<BookDTO[]> {
    return await this.bookService.getAllBooks();
  }

  @Post()
  async saveBooks(@Body() newBook: BookDTO): Promise<BookDTO> {
    return await this.bookService.saveBook(newBook);
  }

  @Patch()
  updateBook(): string {
    return 'este libro fueste atualizado';
  }

  @Delete()
  deleteBok(): string {
    return 'este livro foi deletado ';
  }
}
