import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AgeService } from './age.service';
import { GetAgeDto } from './dto/getAge.dto';
import { ThrottlerGuard } from '@nestjs/throttler';
import { GetResponse, ErrorResponse, ResponseLimit } from './interface';
import { ApiResponse } from '@nestjs/swagger';
import { DateTime } from 'luxon';
import { ValidationDob } from './dto/customePipe';

@UseGuards(ThrottlerGuard)
@Controller('/howold')
export class AgeController {
  constructor(private readonly ageService: AgeService) {}

  @ApiResponse({ status: 429, type: ResponseLimit })
  @ApiResponse({ status: 200, type: GetResponse })
  @ApiResponse({ status: 400, type: ErrorResponse })
  @Get()
  getAge(@Query(new ValidationDob()) getAgeDto: GetAgeDto) {
    return this.ageService.getAge(getAgeDto.dob);
  }
}
