import { Prisma } from '.prisma/client';
import { HttpStatus, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Response } from 'express';
import {CreateBookDto} from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
//  Take Two Input (Title & authorId) from CreateBookDto
  async create(
    createBookDto: CreateBookDto,
    response: Response,
  ): Promise<any> {
    let { title, authorId } = createBookDto
    let temp;
    try {
      temp = await this.prisma.books.create({
        data:{
          title,
          author:{
            connect:{id:authorId}
          },
        },
      });
    } catch {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send({ message: 'Enter Author Id Please !'});
    }
    response.status(HttpStatus.OK).send({ title, authorId });
    return temp;
  }
//  Return Array Of Books
  async findAll(response):Promise<any> {
    let temp;
     temp = await this.prisma.books.findMany();
     if(temp.length > 0){
      response.status(HttpStatus.OK).send(temp);
     }else{
      response.status(HttpStatus.BAD_REQUEST).send({message:'Not Elements In the Table'});
     }
     return temp;
  }
//  Return One Book from the Database
  async findOne(id: number, response: Response):Promise<any> {
    let temp;
      temp = await this.prisma.books.findUnique({where: {id}})
      if(temp === null || temp === undefined){
        response.status(HttpStatus.BAD_REQUEST).send({mes:'Please Type Correct ID'})
      }else{
        response.status(HttpStatus.OK).send(temp)
      }
    return temp
  }
//  Take Input From The BooksUpdateInput and Updates In Database
  update(id: number, data: Prisma.BooksUpdateInput, response: Response) {
    return this.prisma.books
      .update({
        data,
        where: {
          id,
        },
      })
      .catch(() => {
        return response
          .status(HttpStatus.BAD_REQUEST)
          .json({ mes: `ID Doesnot Match the Table ID's` });
      });
  }
//  Take Id from BooksWhereUniqueInput and Delete from Database
  remove(where: Prisma.BooksWhereUniqueInput,response) {
    return this.prisma.books.delete({
      where,
    })
    .then((temp)=>{
      return response.status(HttpStatus.BAD_REQUEST).send(temp)
    })
    .catch(()=>{
      return response.status(HttpStatus.BAD_REQUEST).send({mes:`ID Doesnot Match the Table ID's`})
    })
  }
//  Find the Books Of Specified authorId
  async getOneOrFail(userId: number): Promise<any> {
    let temp;
      temp = await this.prisma.books.findMany({
        where: {
          authorId:userId
        }
      })
    return temp
  }
}
