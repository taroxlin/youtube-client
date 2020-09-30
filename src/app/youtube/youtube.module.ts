import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { ItemTransformPipe } from './pipes/item-transform.pipe';
import { ItemFilterPipe } from './pipes/item-filter.pipe';
import { AuthService } from '../auth/services/auth.service';
import { GuardsGuard } from '../core/guards/guards.guard';
import { YoutubeRoutingModule } from './youtube-routing.module';
@NgModule({
  declarations: [
    SearchListComponent,
    SearchItemComponent,
    ItemDetailsComponent,
    BorderColorDirective,
    StatisticsComponent,
    DateTransformPipe,
    ItemTransformPipe,
    ItemFilterPipe,
    ],
  imports: [
    CommonModule,
    RouterModule,
    YoutubeRoutingModule,

  ],
  providers: [AuthService, GuardsGuard]
})
export class YoutubeModule { }
