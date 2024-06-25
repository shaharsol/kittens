import { Test, TestingModule } from '@nestjs/testing';
import { KittensServiceService } from './kittens-service.service';

describe('KittensServiceService', () => {
  let service: KittensServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KittensServiceService],
    }).compile();

    service = module.get<KittensServiceService>(KittensServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
