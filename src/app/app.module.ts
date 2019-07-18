import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectCupModule} from './select-cup/select-cup.module';
import {SelectOptionsModule} from './select-options/select-options.module';
import {SelectDesignModule} from './select-design/select-design.module';
import {FinishConfigModule} from './finish-config/finish-config.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SelectCupModule,
    SelectOptionsModule,
    SelectDesignModule,
    FinishConfigModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
