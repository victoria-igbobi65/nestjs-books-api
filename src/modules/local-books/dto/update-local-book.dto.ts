import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalBookDto } from './create-local-book.dto';

export class UpdateLocalBookDto extends PartialType(CreateLocalBookDto) {}
