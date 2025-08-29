import { Controller, Get } from '@nestjs/common';
import { BookService } from './app.service';
import { Book,books } from './FakeDatabase';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }
}
