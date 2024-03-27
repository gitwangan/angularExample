import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTodoTitle'
})
export class FormatTodoTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 10 ? `${value.substring(0,10)}...` : value;
  }
}
