import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortlist',
  pure: false
})
export class SortlistPipe implements PipeTransform {

  transform(value: any, fieldName: string): any {
    if (value.length === 0) {
      return value;
    } else {
      return value.sort((a, b) => {
        if (a[fieldName] > b[fieldName]) {
          return 1;
        } else if (a[fieldName]  < b[fieldName]) {
          return -1;
        }
      });
    }
  }
}
