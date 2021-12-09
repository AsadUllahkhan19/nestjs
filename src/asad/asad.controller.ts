import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsadService } from './asad.service';
import { CreateAsadDto } from './dto/create-asad.dto';
import { UpdateAsadDto } from './dto/update-asad.dto';

@Controller('asad')
export class AsadController {
  constructor(private readonly asadService: AsadService) {}

  @Post()
  create(@Body() createAsadDto: CreateAsadDto) {
    return this.asadService.create(createAsadDto);
  }

  @Get()
  findAll() {
    return this.asadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsadDto: UpdateAsadDto) {
    return this.asadService.update(+id, updateAsadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asadService.remove(+id);
  }
}
