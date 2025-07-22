import { Controller, Get, Query } from '@nestjs/common';
import { ExternalBooksService } from './external-books.service';
import { QueryBookDto } from './dto/query-book.dto';

@Controller('external-books')
export class ExternalBooksController {
  constructor(private readonly externalBooksService: ExternalBooksService) {}

  @Get()
  async getExternalBook(@Query() query: QueryBookDto) {

    const books = await this.externalBooksService.searchBookByName(query.name);

    return {
      status_code: 200,
      status: 'success',
      data: books,
    };
  }
}
