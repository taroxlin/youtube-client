import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from '../models/search-item.model';

@Pipe({
  name: 'itemFilter',
  pure: false
})
export class ItemFilterPipe implements PipeTransform {

  public transform(value: ItemModel[], arg: string): ItemModel[] {
    if ( !arg ) {
      return value;
    }
    return value.filter(item => item.snippet.title.toLowerCase().includes(arg.toLowerCase()));
  }

}
