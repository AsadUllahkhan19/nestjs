import { Injectable } from '@nestjs/common';
import { CreateAsadDto } from './dto/create-asad.dto';
import { UpdateAsadDto } from './dto/update-asad.dto';

@Injectable()
export class AsadService {
  create(createAsadDto: CreateAsadDto) {
    return 'This action adds a new asad';
  }

  findAll() {
    return `This action returns all asad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asad`;
  }

  update(id: number, updateAsadDto: UpdateAsadDto) {
    return `This action updates a #${id} asad`;
  }

  remove(id: number) {
    return `This action removes a #${id} asad`;
  }
}
