import { IsString,IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { UserExistsRule } from '../validation/user.validator';

export class CreateBookDto {
    @IsNotEmpty() // Shouldn't Be Empty
    @IsString()  // Should Be String
    title:string; 

    @IsNumber()  //Should be A Number
    @IsNotEmpty()  // Shouldn't Be Empty
    @Validate(UserExistsRule) // Validate If authorId Exists Or Not
    authorId: number;
}
