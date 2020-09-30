import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';
@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.scss']
})
export class SortingPanelComponent implements OnInit {

  constructor(private youtube: YoutubeService) { }

  public ngOnInit(): void {
  }
  public dateSorting(): void {
    this.youtube.toggleSortDate();
  }
  public viewSorting(): void {
    this.youtube.toggleSortViews();
  }
  public onKey(value: string): void {
    this.youtube.setFilterValue(value);
  }
}
