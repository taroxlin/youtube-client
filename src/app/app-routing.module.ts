import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../app/core/pages/not-found/not-found.component';
import { SearchListComponent } from '../app/youtube/components/search-list/search-list.component';
import { ItemDetailsComponent } from './youtube/components/item-details/item-details.component';
import { GuardsGuard } from './core/guards/guards.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'search',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [GuardsGuard]
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
