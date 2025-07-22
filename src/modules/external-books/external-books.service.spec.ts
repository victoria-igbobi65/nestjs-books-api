import { Test, TestingModule } from '@nestjs/testing';
import { ExternalBooksService } from './external-books.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ExternalBooksService', () => {
  let service: ExternalBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalBooksService],
    }).compile();

    service = module.get<ExternalBooksService>(ExternalBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch and map book data correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          name: 'A Game of Thrones',
          isbn: '978-0553103540',
          authors: ['George R. R. Martin'],
          numberOfPages: 694,
          publisher: 'Bantam Books',
          country: 'United States',
          released: '1996-08-01T00:00:00',
        },
      ],
    });

    const result = await service.searchBookByName('A Game of Thrones');

    expect(result).toEqual([
      {
        name: 'A Game of Thrones',
        isbn: '978-0553103540',
        authors: ['George R. R. Martin'],
        number_of_pages: 694,
        publisher: 'Bantam Books',
        country: 'United States',
        release_date: '1996-07-31',
      },
    ]);
  });
});
