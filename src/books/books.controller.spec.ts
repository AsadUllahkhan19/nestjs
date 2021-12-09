import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { response } from 'express';
import {PrismaService} from '../prisma.service'

describe('BooksController', () => {
  let controller: BooksController;

  const mockBookService = {
    create: jest.fn((dto)=>{
      return {
        id: Date.now(),
        ...dto
      }
    }),
    update: jest.fn((id,dto)=>{
      return{
        id,
        ...dto
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    })
    .overrideProvider(BooksService).useValue(mockBookService)
    .compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('It create a book',()=>{
    expect(controller.create({title:"Asad",authorId:6},response)).
    resolves.toEqual({
      id:expect.any(Number),
      name:'Asad',
      authorId:6
    })
  })
  it('It Updates A book',()=>{
    expect(controller.update('1',{title:"Khan"},response))
  })
});
