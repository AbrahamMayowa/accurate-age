import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { GetAgeDto } from './getAge.dto';

describe('accept only iso date string', () => {
  it('should return zero error', async () => {
    const dateOfBirthQuery = { dob: 708739200000 };
    const ofImportDto = plainToInstance(GetAgeDto, dateOfBirthQuery);
    const errors = await validate(ofImportDto);
    expect(errors.length).toBe(0);
  });
});
