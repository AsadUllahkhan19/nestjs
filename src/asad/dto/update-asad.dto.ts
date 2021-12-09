import { PartialType } from '@nestjs/mapped-types';
import { CreateAsadDto } from './create-asad.dto';

export class UpdateAsadDto extends PartialType(CreateAsadDto) {}
