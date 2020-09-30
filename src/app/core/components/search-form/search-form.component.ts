import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(public coreService: CoreService) { }
  public ngOnInit(): void {
  }
}
