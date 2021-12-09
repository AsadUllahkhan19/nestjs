import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAuthorDto: Prisma.AuthorUncheckedCreateInput, response: any): Promise<any>;
    findAll(response: any): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateAuthorDto: UpdateAuthorDto): string;
    remove(id: number): string;
}
