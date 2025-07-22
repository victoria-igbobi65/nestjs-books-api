import { IsOptional, IsString } from 'class-validator';

export class FilterBooksDto {
  @IsOptional()
  @IsString({ message: '"name" filter must be a string' })
  name?: string;

  @IsOptional()
  @IsString({ message: '"author" filter must be a string' })
  author?: string;

  @IsOptional()
  @IsString({ message: '"publisher" filter must be a string' })
  publisher?: string;

  @IsOptional()
  @IsString({ message: '"country" filter must be a string' })
  country?: string;

  @IsOptional()
  @IsString({ message: '"release_date" filter must be a string (YYYY-MM-DD)' })
  release_date?: string;
}
