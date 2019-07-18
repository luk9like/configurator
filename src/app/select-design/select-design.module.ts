import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDesignComponent } from './select-design/select-design.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SelectDesignComponent],
  exports: [
    SelectDesignComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SelectDesignModule { }
