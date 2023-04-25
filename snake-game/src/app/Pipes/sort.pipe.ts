import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, args?: any[]): any {
    value.sort((a, b) => {
      if(a.score > b.score) {
        return 1;
      } else if(a.score < b.score){
        return -1;
      } else {
        return 0;
      }
    })

  }

}
