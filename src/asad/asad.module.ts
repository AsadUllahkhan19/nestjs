import { Module } from '@nestjs/common';
import { AsadService } from './asad.service';
import { AsadController } from './asad.controller';

@Module({
  controllers: [AsadController],
  providers: [AsadService]
})
export class AsadModule {}
