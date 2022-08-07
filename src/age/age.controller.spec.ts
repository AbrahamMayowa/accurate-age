import { Test, TestingModule } from '@nestjs/testing';
import { AgeController } from './age.controller';
import { AgeService } from './age.service';

describe('AppController', () => {
  let ageController: AgeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AgeController],
      providers: [AgeService],
    }).compile();

    ageController = app.get<AgeController>(AgeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ageController.getAge()).toBe('Hello World!');
    });
  });
});
