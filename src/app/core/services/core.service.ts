import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
 public sortingVisible: boolean = false;
  constructor() { }

  public getSortingVisible(): boolean {
    return this.sortingVisible;
  }
  public toggleSorting(): void {
    this.sortingVisible = !this.sortingVisible;
  }
}
