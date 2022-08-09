import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';

@Injectable()
export class AgeService {
  getAge(dateOfBirth: string) {
    const now = DateTime.now();
    const n = new Date(parseInt(dateOfBirth))
    const start = DateTime.fromISO(n.toISOString());
    const age = now.diff(start, ['years', 'months', 'days']).toObject();
    return {
      years: age.years,
      months: age.months,
      days: age.days.toFixed(0),
    };
  }
}
