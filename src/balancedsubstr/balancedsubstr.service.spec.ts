import { Test, TestingModule } from '@nestjs/testing';
import { BalancedsubstrService } from './balancedsubstr.service';

describe('BalancedsubstrService', () => {
  let service: BalancedsubstrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalancedsubstrService],
    }).compile();

    service = module.get<BalancedsubstrService>(BalancedsubstrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
