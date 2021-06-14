import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './Controllers/books/books.controller';
import { BookRepository } from './database/repositorys/book.repoository';
import { BookSchema } from './database/schemas/book.schema';
import { BooksService } from './services/books/books.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/biblioteca', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'book', schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
