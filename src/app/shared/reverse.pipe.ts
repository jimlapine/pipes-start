import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let retVal = '';
    if (value.length === 0) {
      return value;
    } else {
      for (let i = value.length - 1; i >= 0; i--) {
        retVal += value[i];
      }
      return retVal;
    }
  }
}
