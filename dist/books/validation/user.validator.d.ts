import { ValidatorConstraintInterface } from 'class-validator';
import { BooksService } from '../books.service';
export declare class UserExistsRule implements ValidatorConstraintInterface {
    private prismaService;
    constructor(prismaService: BooksService);
    validate(value: number): Promise<boolean>;
}
