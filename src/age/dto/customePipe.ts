import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { DateTime } from 'luxon';

@Injectable()
export class ValidationDob implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (
      !DateTime.fromMillis(parseInt(value.dob)).isValid ||
      DateTime.fromMillis(parseInt(value.dob)) > DateTime.now()
    ) {
      throw new BadRequestException('Invalid dob timestamp');
    }
    return value;
  }
}
