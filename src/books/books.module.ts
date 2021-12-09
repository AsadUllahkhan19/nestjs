import {  Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from 'src/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { UserExistsRule } from './validation/user.validator';

@Module({
  imports: [HttpModule],
  controllers: [BooksController],
  providers: [UserExistsRule,BooksService,PrismaService]
})
export class BooksModule {}
