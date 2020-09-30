import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from '../models/search-item.model';
import { RespondService} from '../../shared/services/respond-service.service';

@Pipe({
  name: 'itemTransform',
  pure: false
})
export class ItemTransformPipe implements PipeTransform {
  public arrayRoot: RespondService;

  public transform(array: ItemModel[], arg1: string): ItemModel[] {
      return array.sort((a: ItemModel, b: ItemModel) => {
        if (arg1 === 'dateInc') {
          return new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime();
        }
        if (arg1 === 'dateDec') {
          return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
        }
        if (arg1 === 'viewInc') {
          return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
        }
        if (arg1 === 'viewDec') {
          return Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
        }
      });
  }
}
