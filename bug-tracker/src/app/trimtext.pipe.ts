import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimtext'
})
export class TrimtextPipe implements PipeTransform {

  transform(data: string, trimLength: number): string {
    return data && data.length < trimLength ? data : data.substr(0,  trimLength) + '...';
  }

}
