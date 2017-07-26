import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {DialogComponent} from './dialog/dialog.component';

// Import the ButtonsModule
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { ProductService } from './produtos/product.service';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ButtonsModule,
     ChartsModule
    // RouterModule.forRoot([
    //   { path: 'monitor', component: AppComponent },
    //   { path: '', redirectTo: 'monitor', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'monitor', pathMatch: 'full' }
    // ])
  ],
  providers: [
  ProductService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

