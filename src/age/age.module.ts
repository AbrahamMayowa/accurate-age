import { Module } from '@nestjs/common';
import { AgeController } from './age.controller';
import { AgeService } from './age.service';

@Module({
  imports: [],
  controllers: [AgeController],
  providers: [AgeService],
})
export class AgeModule {}
