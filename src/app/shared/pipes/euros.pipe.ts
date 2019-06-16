import { Pipe, PipeTransform } from '@angular/core';
import { getEurosValueAndUnit } from '../services/functions';

@Pipe({
  name: 'euros'
})
export class EurosPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value || value === 0) {
      const vnu = getEurosValueAndUnit(parseFloat(value.toString()));
      return vnu.value + ' ' + vnu.unit;
    } else {
      return null;
    }
  }
}
