import { Test, TestingModule } from '@nestjs/testing';
import { AsadService } from './asad.service';

describe('AsadService', () => {
  let service: AsadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsadService],
    }).compile();

    service = module.get<AsadService>(AsadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
