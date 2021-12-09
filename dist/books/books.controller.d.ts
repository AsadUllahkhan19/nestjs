import { Prisma } from '.prisma/client';
import { BooksService } from './books.service';
import { Response } from 'express';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto, response: Response): Promise<any>;
    findAll(response: Response): Promise<any>;
    findOne(id: string, response: Response): Promise<any>;
    update(id: string, updateBookDto: Prisma.BooksUpdateInput, response: Response): Promise<Response<any, Record<string, any>> | import(".prisma/client").Books>;
    remove(id: string, response: Response): Promise<any>;
}
