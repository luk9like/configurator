import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectCupComponent} from './select-cup/select-cup/select-cup.component';
import {SelectOptionsComponent} from './select-options/select-options/select-options.component';
import {SelectDesignComponent} from './select-design/select-design/select-design.component';
import {FinishConfigComponent} from './finish-config/finish-config/finish-config.component';

const routes: Routes = [
  {path: '', component: SelectCupComponent},
  {path: 'options', component: SelectOptionsComponent},
  {path: 'design', component: SelectDesignComponent},
  {path: 'finish', component: FinishConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
