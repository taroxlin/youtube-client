import { Component, OnInit, Input } from '@angular/core';
import {ItemModel, Thumbnails, Statistics} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: ItemModel;
  public thumb: Thumbnails;
  public stats: Statistics;

  constructor() { }

  public ngOnInit(): void {
    this.stats = this.item.statistics;
    this.thumb = this.item.snippet.thumbnails;
  }
}
