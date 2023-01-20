import { Test, TestingModule } from '@nestjs/testing';
import { BusketController } from './busket.controller';
import { BusketService } from './busket.service';

describe('BusketController', () => {
  let controller: BusketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusketController],
      providers: [BusketService],
    }).compile();

    controller = module.get<BusketController>(BusketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
