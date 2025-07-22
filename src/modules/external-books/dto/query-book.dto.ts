import { IsNotEmpty, IsString } from 'class-validator';

export class QueryBookDto {
  @IsNotEmpty({ message: 'Query parameter "name" is required' })
  @IsString({ message: 'Query parameter "name" must be a string' })
  name: string;
}
