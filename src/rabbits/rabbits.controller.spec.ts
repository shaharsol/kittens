import { Test, TestingModule } from '@nestjs/testing';
import { RabbitsController } from './rabbits.controller';

describe('RabbitsController', () => {
  let controller: RabbitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RabbitsController],
    }).compile();

    controller = module.get<RabbitsController>(RabbitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
