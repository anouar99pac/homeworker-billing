import { AbstractControl, ValidatorFn } from '@angular/forms';

export function requiredFilterValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (control.value === null || control.value.id === null) {
      return { 'requiredFilter': true };
    }
  };
}
