/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookDTO } from "src/DTO/books.dto";
import { Book } from "../interfaces/books.interface";

@Injectable()
export class BookRepository {

  constructor(
    @InjectModel('book') private readonly bookModel: Model<Book>
  ){}

  async saveBook(newBook: BookDTO): Promise<BookDTO> {
    const savedBook =  await this.bookModel.create(newBook)
    return savedBook
  }

  async getAllBooks(): Promise<BookDTO[]> {
    const books = await this.bookModel.find({}, {_v : false}).sort({name: +1}).exec()
    return books;
  }

}