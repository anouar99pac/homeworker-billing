import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      return parseFloat(value.toString()).toFixed(2);
    } else {
      return value === 0 ? 0 : null;
    }
  }
}
