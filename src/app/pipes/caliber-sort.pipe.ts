import { Pipe, PipeTransform } from '@angular/core';
import { Caliber } from '../models/caliber';

@Pipe({
  name: 'caliberSort',
})
export class CaliberSortPipe implements PipeTransform {
  transform(calibers: Caliber[]): Caliber[] {
    return calibers.sort((a, b) => a.name.localeCompare(b.name))
  }
}
