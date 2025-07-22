import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  isbn: string;

  @Prop()
  publisher?: string;

  @Prop()
  country?: string;

  @Prop()
  number_of_pages?: number;

  @Prop()
  release_date?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
