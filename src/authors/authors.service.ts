import { Prisma } from '.prisma/client';
import { HttpStatus, Injectable } from '@nestjs/common';
import { response } from 'express';
import { PrismaService } from 'src/prisma.service';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}
//  Take Input AuthorUncheckedCreateInput and Save In Database
  async create(
    createAuthorDto: Prisma.AuthorUncheckedCreateInput,
    response,
  ): Promise<any> {
    let temp;
    try {
      temp = await this.prisma.author.create({ data: createAuthorDto });
    } catch {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json({ mes: 'Please Enter Name Field' });
    }
    response.status(HttpStatus.OK).send(temp);
    return temp;
  }
//  Find All The Authors From The Database
  async findAll(response): Promise<any> {
    let authors;
    authors = await this.prisma.author.findMany();
    if (authors.length > 0) {
      response.status(HttpStatus.OK).send(authors);
      return authors;
    } else {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send({ mess: 'No Fields To Be Found' });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
