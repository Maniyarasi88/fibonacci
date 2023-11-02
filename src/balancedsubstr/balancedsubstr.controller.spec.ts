import { Test, TestingModule } from '@nestjs/testing';
import { BalancedsubstrController } from './balancedsubstr.controller';
import { BalancedsubstrService } from './balancedsubstr.service';

describe('BalancedsubstrController', () => {
  let controller: BalancedsubstrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalancedsubstrController],
      providers: [BalancedsubstrService],
    }).compile();

    controller = module.get<BalancedsubstrController>(BalancedsubstrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
