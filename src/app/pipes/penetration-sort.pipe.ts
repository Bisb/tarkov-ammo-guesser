import { Pipe, PipeTransform } from '@angular/core';
import { Ammunition } from '../models/ammunition';

@Pipe({
  name: 'penetrationSort',
})
export class PenetrationSortPipe implements PipeTransform {
  transform(value: Ammunition[]): Ammunition[] {
    return value.sort((a, b) => a.penetrationPower - b.penetrationPower)
  }
}
