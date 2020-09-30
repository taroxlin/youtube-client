import { Component, OnInit, Input } from '@angular/core';
import { Response } from './response';

@Component({
  selector: '',
  templateUrl: '',
  styleUrls: [''],
})

export class SearchResultsComponent implements OnInit {
  @Input() public respond: Response;
  constructor( ) {
    console.log('const result');
  }

  public ngOnInit(): void {
  }

  public getColor = (published: Date): {} => {
    const actualDate: number = new Date().getTime();
    const publishDate: number = new Date(published).getTime();
    const daysAgo: number = (actualDate - publishDate) / (24 * 60 * 60000);
    if ( daysAgo < 7) {
      return {
        'border-bottom' : '5px solid blue',
      };
    }
    if ( daysAgo >= 7 && daysAgo < 31) {
      return {
        'border-bottom' : '5px solid green',
      };
    }
    if ( daysAgo >= 31 && daysAgo <= 180) {
      return {
        'border-bottom' : '5px solid yellow',
      };
    }
    if ( daysAgo > 180) {
      return {
        'border-bottom' : '5px solid red',
      };
    }
  }
}
