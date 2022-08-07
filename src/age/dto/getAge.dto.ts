import { IsDateString } from 'class-validator';

export class GetAgeDto {
  @IsDateString()
  dateOfBirth: string;
}
