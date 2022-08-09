import { Test, TestingModule } from '@nestjs/testing';
import { AgeController } from './age.controller';
import { AgeService } from './age.service';
import { ThrottlerModule } from '@nestjs/throttler';

describe('AgeController', () => {
  let ageController: AgeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ThrottlerModule.forRoot({
          ttl: 60,
          limit: 3,
        }),
      ],
      controllers: [AgeController],
      providers: [AgeService],
    }).compile();

    ageController = app.get<AgeController>(AgeController);
  });

  describe('age controller', () => {
    it('should return accurate age', () => {
      jest.useFakeTimers().setSystemTime(new Date('2022-06-08'));
      const ageDto = {
        dob: 708739200000,
      };
      expect(ageController.getAge(ageDto)).toHaveProperty('years', 29);
    });
  });
});
