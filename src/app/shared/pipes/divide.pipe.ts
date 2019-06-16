import { Pipe, PipeTransform } from '@angular/core';

function isNumeric(num) {
  return !isNaN(num);
}

@Pipe({name: 'divideBy'})
export class DivideByPipe implements PipeTransform {
  transform(value: number, multiple: number): number {
    return isNumeric(value) ? value / multiple : null;
  }
}
