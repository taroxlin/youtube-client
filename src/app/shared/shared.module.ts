import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespondHandlerDirective } from './directives/respond-handler.directive';



@NgModule({
  declarations: [RespondHandlerDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
