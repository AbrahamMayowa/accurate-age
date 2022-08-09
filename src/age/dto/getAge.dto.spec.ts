import { GetAgeDto } from './getAge.dto';
import { ArgumentMetadata } from '@nestjs/common';
import { ValidationDob } from './customePipe';

describe('accept only valid timestamp', () => {
  let target = new ValidationDob();
  const metadata: ArgumentMetadata = {
    type: 'query',
    metatype: GetAgeDto,
    data: '',
  };

  it('should throw error when dob is invalid', async () => {
    try {
      await target.transform(<GetAgeDto>{ dob: 'null' }, metadata);
      expect(true).toBe(false);
    } catch (err) {
      expect(err.getResponse().message).toEqual('Invalid dob timestamp');
    }
  });

  it('should throw error when dob is greater than current date', async () => {
    try {
      await target.transform(<GetAgeDto>{ dob: 'd2840409341' }, metadata);
      expect(true).toBe(false);
    } catch (err) {
      expect(err.getResponse().message).toEqual('Invalid dob timestamp');
    }
  });
});
