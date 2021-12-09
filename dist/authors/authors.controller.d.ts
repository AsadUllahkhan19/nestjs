import { Prisma } from '.prisma/client';
import { AuthorsService } from './authors.service';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Response } from 'express';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: Prisma.AuthorUncheckedCreateInput, response: Response): Promise<any>;
    findAll(response: Response): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateAuthorDto: UpdateAuthorDto): string;
    remove(id: string): string;
}
