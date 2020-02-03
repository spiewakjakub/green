import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
    return value.getDay();
  }

}
