import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCupComponent } from './select-cup/select-cup.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SelectCupComponent],
  exports: [
    SelectCupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SelectCupModule { }
