import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExternalBooksModule } from './modules/external-books/external-books.module';
import { LocalBooksModule } from './modules/local-books/local-books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    ExternalBooksModule,
    LocalBooksModule,
  ],
})
export class AppModule {}
