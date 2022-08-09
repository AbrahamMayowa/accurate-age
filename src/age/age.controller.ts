import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AgeService } from './age.service';
import { GetAgeDto } from './dto/getAge.dto';
import { ThrottlerGuard } from '@nestjs/throttler';
import { GetResponse, ErrorResponse, ResponseLimit } from './interface';
import {ApiResponse } from '@nestjs/swagger';

@UseGuards(ThrottlerGuard)
@Controller('/howold')
export class AgeController {
  constructor(private readonly ageService: AgeService) {}

  @ApiResponse({ status: 429, type: ResponseLimit})
  @ApiResponse({ status: 200, type: GetResponse})
  @ApiResponse({ status: 400, type: ErrorResponse})
  @Get()
  getAge(@Query() getAgeDto: GetAgeDto) {
    return this.ageService.getAge(getAgeDto.dob);
  }
}



/***
 * 2022-08-09T06:52:05.172753+00:00 heroku[web.1]: State changed from starting to up
2022-08-09T06:49:59.000000+00:00 app[heroku-redis]: source=REDIS addon=redis-rectangular-91737 sample#active-connections=1 sample#load-avg-1m=0.32 sample#load-avg-5m=0.26 sample#load-avg-15m=0.235 sample#read-iops=0 sample#write-iops=0 sample#memory-total=16085852kB sample#memory-free=10841220kB sample#memory-cached=2484884kB sample#memory-redis=334888bytes sample#hit-rate=1 sample#evicted-keys=0
2022-08-09T06:52:50.259346+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=1d9989ee-8aae-4897-974f-bb5cee68df44 fwd="20.163.56.214" dyno=web.1 connect=0ms service=13ms status=400 bytes=394 protocol=https
2022-08-09T06:52:50.577704+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=b566c8f1-368b-4ce0-a585-3ecf58eb099d fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:51.051576+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=63b8271b-d03d-4b03-9cb1-1697b0136403 fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:52:50.787359+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=eadcf420-acef-4ffa-a054-b05f2c716342 fwd="20.163.56.214" dyno=web.1 connect=1ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:52:51.292546+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=65b6328d-3fc0-4018-86df-005a2b58510b fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:51.307421+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=6a2db1d6-665d-4ed0-bbcf-ae5ba2128888 fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=395 protocol=https
2022-08-09T06:52:50.752006+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=e5b77ec7-6987-4e16-b109-bb5c046b4d23 fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:52:52.082762+00:00 heroku[router]: at=info method=GET path="/howold?dob=1061010000000" host=acurate-age.herokuapp.com request_id=c431df58-7cc2-40b3-9b0d-52e0f4800bd8 fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:50.727815+00:00 heroku[router]: at=info method=GET path="/howold?dob=436504400000" host=acurate-age.herokuapp.com request_id=63a1b7cd-d246-4134-8828-52ad0bba29fd fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:52:53.107115+00:00 heroku[router]: at=info method=GET path="/howold?dob=383551200000" host=acurate-age.herokuapp.com request_id=6b3df6e2-f5c1-4cdf-b05c-3bb6895eabf6 fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:54.124711+00:00 heroku[router]: at=info method=GET path="/howold?dob=-149194800000" host=acurate-age.herokuapp.com request_id=a9a30a42-e75b-43d5-bbec-f2a4357b9336 fwd="20.163.56.214" dyno=web.1 connect=0ms service=6ms status=400 bytes=394 protocol=https
2022-08-09T06:52:55.152401+00:00 heroku[router]: at=info method=GET path="/howold?dob=1253768400000" host=acurate-age.herokuapp.com request_id=47c7945a-5cf6-41a1-9e40-938c2f574415 fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:56.161963+00:00 heroku[router]: at=info method=GET path="/howold?dob=-343850400000" host=acurate-age.herokuapp.com request_id=e28e48c9-7a77-4b87-a77d-1c2f4b08ef3b fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:57.172514+00:00 heroku[router]: at=info method=GET path="/howold?dob=undefined" host=acurate-age.herokuapp.com request_id=8b4bfdd9-6b1a-4c16-ae98-e46fb7a21c6b fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=395 protocol=https
2022-08-09T06:52:58.213754+00:00 heroku[router]: at=info method=GET path="/howold?dob=" host=acurate-age.herokuapp.com request_id=78b82e6f-1593-4d99-b7f0-535d6193fd1e fwd="20.163.56.214" dyno=web.1 connect=1ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:52:59.217928+00:00 heroku[router]: at=info method=GET path="/howold?dob=null" host=acurate-age.herokuapp.com request_id=bcff59ae-be5b-4409-a71d-7f5949615202 fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:53:00.250300+00:00 heroku[router]: at=info method=GET path="/howold?dob=11111111111111110000" host=acurate-age.herokuapp.com request_id=66cec4a9-e1e8-40c7-b5ca-2db8117a53d5 fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:53:01.259249+00:00 heroku[router]: at=info method=GET path="/howold?dob=NaN" host=acurate-age.herokuapp.com request_id=16e6c1a6-0e6d-478d-bb41-d29c847ee69f fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=394 protocol=https
2022-08-09T06:53:02.281424+00:00 heroku[router]: at=info method=GET path="/howold?dob=3182652000000" host=acurate-age.herokuapp.com request_id=94244def-0415-4b78-a32e-1e7230b9020f fwd="20.163.56.214" dyno=web.1 connect=0ms service=3ms status=400 bytes=394 protocol=https
2022-08-09T06:53:03.328290+00:00 heroku[router]: at=info method=GET path="/howold?dob=3250022400000" host=acurate-age.herokuapp.com request_id=39a74708-204c-4796-aa43-938cdff14ace fwd="20.163.56.214" dyno=web.1 connect=1ms service=7ms status=400 bytes=394 protocol=https
2022-08-09T06:53:04.347242+00:00 heroku[router]: at=info method=GET path="/howold?dob=2119932000000" host=acurate-age.herokuapp.com request_id=fd2437ea-51c0-4772-8e1c-4ca69998f637 fwd="20.163.56.214" dyno=web.1 connect=0ms service=2ms status=400 bytes=395 protocol=https
 */
