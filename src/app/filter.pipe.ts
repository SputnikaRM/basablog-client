import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], search: string): any[] {
      if(!items) return [];
      if(!search) return items;
  search = search.toLowerCase();
  return items.filter( it => { return it.postText.toLowerCase().includes(search)
    
    });
}
}  
