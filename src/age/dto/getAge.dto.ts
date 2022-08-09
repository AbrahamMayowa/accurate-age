import { IsDateString, IsInt, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DateTime } from 'luxon';

export class GetAgeDto {
  @ApiProperty({ type: String, description: 'Required iso date string i.e 2021-03-02' })
  dob: string;
}
