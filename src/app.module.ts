import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BooksService } from './app.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BooksService],
})
export class AppModule {}
