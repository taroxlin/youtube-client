import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { ItemModel } from '../../models/search-item.model';
import { RespondService } from '../../../shared/services/respond-service.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})

export class SearchListComponent implements OnInit {
  public videoList: ItemModel[];
  public sortBy: string;
  constructor(
    private respond: RespondService,
    private youtube: YoutubeService,
  ) {}

  public ngOnInit(): void {
    this.videoList = this.respond.getItems();
  }
}
