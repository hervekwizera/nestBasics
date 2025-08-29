import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book,books } from './FakeDatabase';

@Controller('books')
export class BookController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id:string): Book|undefined{
    const bookID = +id;
    return this.booksService.findById(bookID)
  }
}
