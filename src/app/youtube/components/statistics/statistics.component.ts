import { Component, OnInit, Input } from '@angular/core';
import { Statistics } from '../../models/search-item.model';
import {ImageService} from '../../services/images.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
@Input() public stats: Statistics;
  constructor(public itemService: ImageService = new ImageService) { }

 public ngOnInit(): void {
  }

}
