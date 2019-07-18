import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionsComponent } from './select-options/select-options.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SelectOptionsComponent],
  exports: [
    SelectOptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SelectOptionsModule { }
