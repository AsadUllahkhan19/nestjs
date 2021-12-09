import { ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from './user.service';
export declare class IsUserAlreadyExist implements ValidatorConstraintInterface {
    protected readonly usersService: UsersService;
    constructor(usersService: UsersService);
    validate(text: string): Promise<boolean>;
}
