import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocalBookDto } from './dto/create-local-book.dto';
import { UpdateLocalBookDto } from './dto/update-local-book.dto';
import { Book } from './schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LocalBooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}
  async create(dto: CreateLocalBookDto): Promise<Book> {
    return await this.bookModel.create(dto);
  }

  async findAll(filters: any): Promise<Book[]> {
    const query: any = {};

    if (filters.name) query.name = new RegExp(filters.name, 'i');
    if (filters.author) query.author = new RegExp(filters.author, 'i');
    if (filters.publisher) query.publisher = new RegExp(filters.publisher, 'i');
    if (filters.country) query.country = new RegExp(filters.country, 'i');
    if (filters.release_date) query.release_date = filters.release_date;

    return this.bookModel.find(query).exec();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, dto: UpdateLocalBookDto): Promise<Book> {
    const updated = await this.bookModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!updated) throw new NotFoundException('Book not found');
    return updated;
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.bookModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Book not found');
    return { deleted: true };
  }
}
