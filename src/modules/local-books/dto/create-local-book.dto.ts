import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateLocalBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Book name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Author is required' })
  author: string;

  @IsString()
  @IsNotEmpty({ message: 'ISBN is required' })
  isbn: string;

  @IsString()
  @IsOptional()
  publisher?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsNumber()
  @IsOptional()
  number_of_pages?: number;

  @IsString()
  @IsOptional()
  release_date?: string;
}
