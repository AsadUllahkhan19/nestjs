import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { BooksService } from '../books.service';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class UserExistsRule implements ValidatorConstraintInterface {
  constructor(private prismaService: BooksService ) {}

  async validate(value: number):Promise<boolean> {
        const temp = await this.prismaService.getOneOrFail(value);
        if(temp.length>0){  // If temp is greater than 0 
          return false;  // Return False
        }else{
          return true // Return True
      }
  }
}
