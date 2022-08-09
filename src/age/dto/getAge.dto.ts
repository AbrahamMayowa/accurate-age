import { ApiProperty } from '@nestjs/swagger';

export class GetAgeDto {
  @ApiProperty({
    type: String,
    description: 'Required valid timestamp i.e 436504400000',
  })
  dob: string;
}
