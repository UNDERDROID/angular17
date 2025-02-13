import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToComma'
})
export class DecimalToCommaPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null) return '';

    const stringValue = typeof value === 'number' ? value.toString() : value

    return stringValue.replace(/\./g, ',');  // Replace decimal point with comma
  }

}
