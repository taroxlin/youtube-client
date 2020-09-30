import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchListComponent } from './components/search-list/search-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: SearchListComponent,
  },
  { path: 'video-detail/:id',
    component: ItemDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
