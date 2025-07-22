import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface ExternalBookResponse {
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  released: string;
}

@Injectable()
export class ExternalBooksService {
  private readonly apiBaseUrl = 'https://anapioficeandfire.com/api/books';

  async searchBookByName(name: string) {
    try {
      const response = await axios.get<ExternalBookResponse[]>(`${this.apiBaseUrl}?name=${encodeURIComponent(name)}`);
      const books = response.data;

      return books.map((book) => ({
        name: book.name,
        isbn: book.isbn,
        authors: book.authors,
        number_of_pages: book.numberOfPages,
        publisher: book.publisher,
        country: book.country,
        release_date: new Date(book.released).toISOString().split('T')[0],
      }));
    } catch (error) {
      throw new Error('Failed to fetch book from external API');
    }
  }
}
