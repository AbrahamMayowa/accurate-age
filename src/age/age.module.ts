import { Module } from '@nestjs/common';
import { AgeController } from './age.controller';
import { AgeService } from './age.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 3,
    }),
  ],
  controllers: [AgeController],
  providers: [AgeService],
})
export class AgeModule {}
