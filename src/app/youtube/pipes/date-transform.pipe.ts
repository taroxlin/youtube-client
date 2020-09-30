import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe extends DatePipe implements PipeTransform {
  public transform(value: Date, args: string): string {
    return super.transform(value, 'EEEE, MMMM, d, y');
  }

}
