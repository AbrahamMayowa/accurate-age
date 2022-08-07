import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AgeService } from './age.service';
import { GetAgeDto } from './dto/getAge.dto';
import { ThrottlerGuard } from '@nestjs/throttler';

@UseGuards(ThrottlerGuard)
@Controller('/age')
export class AgeController {
  constructor(private readonly ageService: AgeService) {}

  @Get()
  getAge(@Query() getAgeDto: GetAgeDto) {
    return this.ageService.getAge(getAgeDto.dateOfBirth);
  }
}
