import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {ItemsModule} from './items/items.module';
import config from './config/keys';
import { ProductsModule } from './products/products.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { AsadModule } from './asad/asad.module';

@Module({
  imports: [ProductsModule,ItemsModule,MongooseModule.forRoot(config.mongoURI), BooksModule, AuthorsModule, AsadModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
