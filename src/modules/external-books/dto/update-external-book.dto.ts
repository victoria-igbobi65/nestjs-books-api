import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalBookDto } from './create-external-book.dto';

export class UpdateExternalBookDto extends PartialType(CreateExternalBookDto) {}
