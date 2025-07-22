import { Test, TestingModule } from '@nestjs/testing';
import { LocalBooksService } from './local-books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { NotFoundException } from '@nestjs/common';

const mockBook = {
  _id: 'abc123',
  name: 'Test Book',
  author: 'Test Author',
  isbn: '123456',
  publisher: 'TestPub',
  country: 'TestLand',
  number_of_pages: 100,
  release_date: '2024-01-01',
};

const createMockBookModel = () => ({
  create: jest.fn().mockResolvedValue(mockBook),
  find: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue([mockBook]),
  }),
  findById: jest.fn().mockResolvedValue(mockBook),
  findByIdAndUpdate: jest.fn().mockResolvedValue(mockBook),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockBook),
});

describe('LocalBooksService', () => {
  let service: LocalBooksService;
  let model: ReturnType<typeof createMockBookModel>;

  beforeEach(async () => {
    const mockBookModel = createMockBookModel();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocalBooksService,
        {
          provide: getModelToken(Book.name),
          useValue: mockBookModel,
        },
      ],
    }).compile();

    service = module.get<LocalBooksService>(LocalBooksService);
    model = module.get(getModelToken(Book.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a book', async () => {
    const result = await service.create(mockBook as any);
    expect(result).toEqual(mockBook);
  });

  it('should return all books', async () => {
    const result = await service.findAll({});
    expect(result).toEqual([mockBook]);
  });

  it('should return a book by id', async () => {
    const result = await service.findOne('abc123');
    expect(result).toEqual(mockBook);
  });

  it('should throw NotFoundException if book not found', async () => {
    jest.spyOn(model, 'findById').mockResolvedValueOnce(null);
    await expect(service.findOne('wrong-id')).rejects.toThrow(NotFoundException);
  });
});
