import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
    const month = value.getMonth();
    switch (month) {
      case 0: return 'Sty';
      case 1: return 'Lut';
      case 2: return 'Mar';
      case 3: return 'Kwi';
      case 4: return 'Maj';
      case 5: return 'Cze';
      case 6: return 'Lip';
      case 7: return 'Sie';
      case 8: return 'Wrz';
      case 9: return 'Paź';
      case 10: return 'Lis';
      case 11: return 'Gru';
      default: return '';
    }
  }

}
