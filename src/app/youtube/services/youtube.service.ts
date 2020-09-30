import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public dateIncreases: boolean = false;
  public dateDecreases: boolean = false;
  public viewIncreases: boolean = false;
  public viewDecreases: boolean = false;
  public filterString: string = '';
  public sortedBy: string = '';

  constructor() { }
  public getSortValue(): string {
    return this.sortedBy;
  }
  public setFilterValue(str: string): void {
   this.filterString = str;
  }
  public toggleSortDate(): void {
    if (this.viewIncreases || this.viewDecreases) {
      this.viewIncreases = false;
      this.viewDecreases = false;
    }
    if ( this.dateIncreases ) {
      this.dateIncreases = false;
      this.dateDecreases = true;
    } else if ( this.dateDecreases ) {
      this.dateIncreases = true;
      this.dateDecreases = false;
    } else if ( !this.dateDecreases && !this.dateIncreases) {
      this.dateIncreases = true;
    }
    this.sortByHandler();
  }

  public toggleSortViews(): void {
    if (this.dateIncreases || this.dateDecreases) {
      this.dateIncreases = false;
      this.dateDecreases = false;
    }
    if ( this.viewIncreases ) {
      this.viewIncreases = false;
      this.viewDecreases = true;
    } else if ( this.viewDecreases ) {
      this.viewIncreases = true;
      this.viewDecreases = false;
    } else if ( !this.viewDecreases && !this.viewIncreases) {
      this.viewIncreases = true;
    }
    this.sortByHandler();
  }
  public sortByHandler(): void {
    if ( this.dateIncreases ) {
      this.sortedBy = 'dateInc';
    }
    if ( this.dateDecreases ) {
      this.sortedBy = 'dateDec';
    }
    if ( this.viewIncreases ) {
      this.sortedBy = 'viewInc';
    }
    if ( this.viewDecreases ) {
      this.sortedBy = 'viewDec';
    }
  }
}
