import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pipe will refilter when even data changes, high performance cost, be carefull using this option
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      // if (item[propName].toUpperCase().indexOf(filterString.toUpperCase()) !== -1) {
      if (item[propName].toUpperCase() === filterString.toUpperCase()) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
