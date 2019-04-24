import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if(!items || !filter) {
      return items;
    }
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
