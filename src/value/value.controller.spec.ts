import { Test, TestingModule } from '@nestjs/testing';
import { ValueController } from './value.controller';
import { ValueService } from './value.service';

describe('MeterController', () => {
  
  let meterController: ValueController;

  beforeEach(async () => {

    const app: TestingModule = await Test.createTestingModule({
      controllers: [ValueController],
      providers: [ValueService],
    }).compile();

    meterController = app.get<ValueController>(ValueController);
  });

  describe('root', () => {

    it('should return "Hello World!"', () => {
      expect(meterController.calculateValueSquareMeter(1)).toBe(1);
    });

  });
});
