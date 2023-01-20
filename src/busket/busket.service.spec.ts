import { Test, TestingModule } from '@nestjs/testing';
import { BusketService } from './busket.service';

describe('BusketService', () => {
  let service: BusketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusketService],
    }).compile();

    service = module.get<BusketService>(BusketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
