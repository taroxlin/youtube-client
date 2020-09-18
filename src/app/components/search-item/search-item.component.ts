import { Component, OnInit, Input } from '@angular/core';
import {ItemModel, Thumbnails, Statistics} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: ItemModel;
  public thumbnails: Thumbnails;
  public statistics: Statistics;

  constructor() { }
  public ngOnInit(): void {
    this.thumbnails = this.item.snippet.thumbnails;
    this.statistics = this.item.statistics;
  }
}
