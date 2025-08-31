import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BookController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = +id;
    return this.booksService.findById(bookID);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    if (!book.author || !book.title || !book.publicationYear) return undefined;
    return this.booksService.create(book);
  }

  // ✅ Update endpoint
  @Put(':id')
  updateBook(
    @Param('id') id: string,
    @Body() updatedData: Partial<Book>,
  ): Book | undefined {
    const bookID = +id;
    return this.booksService.update(bookID, updatedData);
  }

  // ✅ Delete endpoint
  @Delete(':id')
  deleteBook(@Param('id') id: string): Book | undefined {
    const bookID = +id;
    return this.booksService.delete(bookID);
  }
}
