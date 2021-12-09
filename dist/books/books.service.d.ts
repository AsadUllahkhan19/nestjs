import { Prisma } from '.prisma/client';
import { PrismaService } from '../prisma.service';
import { Response } from 'express';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBookDto: CreateBookDto, response: Response): Promise<any>;
    findAll(response: any): Promise<any>;
    findOne(id: number, response: Response): Promise<any>;
    update(id: number, data: Prisma.BooksUpdateInput, response: Response): Promise<Response<any, Record<string, any>> | import(".prisma/client").Books>;
    remove(where: Prisma.BooksWhereUniqueInput, response: any): Promise<any>;
    getOneOrFail(userId: number): Promise<any>;
}
