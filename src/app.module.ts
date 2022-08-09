import { Module } from '@nestjs/common';
import { AgeController } from './age/age.controller';
import { AgeService } from './age/age.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('throller_ttl'),
        limit: config.get('throller_limit'),
        storage: new ThrottlerStorageRedisService(config.get('redis_url')),
      }),
    }),
  ],
  controllers: [AgeController],
  providers: [AgeService],
})
export class AgeModule {}
