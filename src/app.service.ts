import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(book: Partial<Book>): Book {
    const newID = books[books.length - 1].id + 1;
    const newBook: Book = {
      id: newID,
      author: book.author ?? '',
      title: book.title ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    books.push(newBook);
    return newBook;
  }

  // ✅ Update functionality
  update(bookId: number, updatedData: Partial<Book>): Book | undefined {
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return undefined; // Not found
    }

    // Update only provided fields
    books[bookIndex] = {
      ...books[bookIndex],
      ...updatedData,
      id: bookId, // Ensure ID stays unchanged
    };

    return books[bookIndex];
  }
}
