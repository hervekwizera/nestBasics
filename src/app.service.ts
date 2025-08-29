import { Injectable } from '@nestjs/common';
import { Book,books } from './FakeDatabase';

@Injectable()
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }
}
