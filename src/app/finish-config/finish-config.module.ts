import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinishConfigComponent } from './finish-config/finish-config.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FinishConfigComponent],
  exports: [
    FinishConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FinishConfigModule { }
