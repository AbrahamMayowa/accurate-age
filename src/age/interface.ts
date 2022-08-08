import { ApiProperty } from '@nestjs/swagger';

export class GetResponse {
  @ApiProperty({ type: String })
  years: string;

  @ApiProperty({ type: String })
  months: string;

  @ApiProperty({ type: String })
  days: string;
}

export class ErrorResponse {
  @ApiProperty({ type: Number })
  statusCode: number;

  @ApiProperty({ type: String })
  message: string;

  @ApiProperty({ type: String })
  error: string;
}
