import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainLogoComponent } from './components/main-logo/main-logo.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { SortingPanelComponent } from './components/sorting-panel/sorting-panel.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainLogoComponent,
    SearchFormComponent,
    LoginPanelComponent,
    SortingPanelComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
