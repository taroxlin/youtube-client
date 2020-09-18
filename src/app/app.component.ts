import { Component, ChangeDetectorRef } from '@angular/core';
import { Response } from './components/search-results/response';
import ExampleJson from '../assets/example.json';
import { ItemModel } from './models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'youtube-client';
  public respond: Response = new Response();
  public videoList: ItemModel[];
  constructor() { }

  public ngOnInit(): void {
  }
  public submitHandler(searchValue: string): void {
    this.respond.updateRespond(ExampleJson);
  }
}
