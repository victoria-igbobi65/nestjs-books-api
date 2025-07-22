import { Module } from '@nestjs/common';
import { LocalBooksService } from './local-books.service';
import { LocalBooksController } from './local-books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
  ],
  controllers: [LocalBooksController],
  providers: [LocalBooksService],
})
export class LocalBooksModule {}
