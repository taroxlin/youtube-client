import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public value: string;
  public filterValue: string;
  public isSortingVisible: boolean;
  @Output() public searchVal: EventEmitter<string> = new EventEmitter<string>();
  constructor(public coreService: CoreService) {  }

  public ngOnInit(): void {
    this.isSortingVisible = this.coreService.sortingVisible;
  }

}
