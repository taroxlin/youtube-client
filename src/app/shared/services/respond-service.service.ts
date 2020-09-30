import { Injectable } from '@angular/core';
import { ResponseModel } from '../../youtube/models/search-response.model';
import example from './example.json';
import { ItemModel } from '../../youtube/models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class RespondService {
  public respond: ResponseModel = example;
  constructor() { }

  public getRespond(): ResponseModel {
    return this.respond;
  }
  public getItems(): ItemModel[] {
    return this.respond.items;
  }
  public getVideo(id: string): ItemModel {
    return this.respond.items.find(item => item.id === id);
  }
}
