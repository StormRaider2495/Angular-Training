import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'closedCount',
  pure: false
})
export class ClosedCountPipe implements PipeTransform {

  transform(bugs: Array<any>): number {
    return bugs.reduce((prevResult, bug) => (bug.isClosed ? ++prevResult : prevResult), 0);
  }

}
