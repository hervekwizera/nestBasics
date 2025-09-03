import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BooksService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [BookController, MoviesController],
  providers: [BooksService, MoviesService],
})
export class AppModule {}
