import { IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetAgeDto {
  @ApiProperty({ type: String, description: 'Required iso date string i.e 2021-03-02' })
  @IsDateString()
  dateOfBirth: string;
}
