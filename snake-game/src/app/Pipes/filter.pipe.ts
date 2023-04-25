import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const actions = [];
    for(const action of value){
      if(action.includes(filterString)){
        actions.push(action)
      }
    }
    return actions;
  }
}
