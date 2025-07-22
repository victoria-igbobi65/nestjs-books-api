import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LocalBooksService } from './local-books.service';
import { CreateLocalBookDto } from './dto/create-local-book.dto';
import { UpdateLocalBookDto } from './dto/update-local-book.dto';
import { FilterBooksDto } from './dto/filter-books.dto';

@Controller('v1/local-books')
export class LocalBooksController {
  constructor(private readonly localBooksService: LocalBooksService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateLocalBookDto) {
    const book = await this.localBooksService.create(createBookDto);

    return {
      status_code: 201,
      status: 'success',
      data: book,
    };
  }

  @Get()
  async findAll(@Query() query: FilterBooksDto) {
    const books = await this.localBooksService.findAll(query);
    return { status_code: 200, status: 'success', data: books };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.localBooksService.findOne(id);
    return { status_code: 200, status: 'success', data: book };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateLocalBookDto) {
    const updated = await this.localBooksService.update(id, dto);
    return { status_code: 200, status: 'success', data: updated };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.localBooksService.remove(id);
    return {
      status_code: 200,
      status: 'success',
      message: 'Book deleted successfully',
    };
  }
}
