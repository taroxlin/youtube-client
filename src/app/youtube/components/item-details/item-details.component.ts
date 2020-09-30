import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../../models/search-item.model';
import { RespondService } from '../../../shared/services/respond-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: ItemModel;

  constructor(
              private respond: RespondService,
              private route: ActivatedRoute) {}

 public ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.item = this.respond.getVideo(id);
  }
}
