import { Prisma } from '.prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Response } from 'express';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createBookDto: CreateBookDto,
    @Res() response: Response,
  ) {
    const books = await this.booksService.create(createBookDto, response);
    return books;
  }

  @Get()
  async findAll(@Res() response: Response) {
    let book;
    book = await this.booksService.findAll(response);
    return book;
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    const book = await this.booksService.findOne(+id, response);
    return book;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookDto: Prisma.BooksUpdateInput,
    @Res() response: Response,
  ) {
    return this.booksService.update(+id, updateBookDto, response);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    return this.booksService.remove({ id: +id }, response);
  }
}
