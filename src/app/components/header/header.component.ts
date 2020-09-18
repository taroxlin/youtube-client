import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Response } from '../search-results/response';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public value: string;
  public filterValue: string;
  public isSortingVisible: boolean = false;
  @Input() public respond: Response;
  @Output() public searchVal: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  public ngOnInit(): void {
  }
  public onSubmit(): void {
    this.searchVal.emit(this.value);
  }
  public filterBy(): void {
    this.respond.filterBy(this.filterValue);
  }
 public sorterBy(param: string): void {
  this.respond.sorterHandler(param);
 }
  public changeVisible(): void {
    this.isSortingVisible = !this.isSortingVisible;
  }
}
