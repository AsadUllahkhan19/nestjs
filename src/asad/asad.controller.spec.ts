import { Test, TestingModule } from '@nestjs/testing';
import { AsadController } from './asad.controller';
import { AsadService } from './asad.service';

describe('AsadController', () => {
  let controller: AsadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsadController],
      providers: [AsadService],
    }).compile();

    controller = module.get<AsadController>(AsadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
