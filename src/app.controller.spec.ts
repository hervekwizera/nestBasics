import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './app.controller';
import { BooksService } from './app.service';

describe('AppController', () => {
  let appController: BookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BooksService],
    }).compile();

    appController = app.get<BookController>(BookController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAllBooks()).toBe('Hello World!');
    });
  });
});
