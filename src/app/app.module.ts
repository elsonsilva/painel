import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

// ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

// COMPONENTES
import { AppComponent } from './app.component';
import { TotaisDiaComponent } from './totais/totais-dia.component';
import { DonutComponent } from './donut/donut.component';
import { DonutCenterComponent } from './donut/donut-center.component';
import { DialogComponent } from './dialog/dialog.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { AcumuladoComponent } from './acumulado/acumulado.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { VistoComponent } from './visto/visto.component';

// SERVICOS
import { TotaisDiaService} from './totais/totais-dia.service';
import { DonutService } from './donut/donut.service';
import { DonutCenterService } from './donut/donut-center.service';
import { MovimentoService } from './movimento/movimento.service';
import { AcumuladoService } from './acumulado/acumulado.service';
import { SubtituloService } from './subtitulo/subtitulo.service';
import { VistoService } from './visto/visto.service';

// KENDO UI
import {ChartsModule} from '@progress/kendo-angular-charts';
import {ButtonsModule} from '@progress/kendo-angular-buttons';

// import {NgxChartsModule} from '@swimlane/ngx-charts';

import 'hammerjs';




@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TotaisDiaComponent,
    DonutComponent,
    DonutCenterComponent,
    MovimentoComponent,
    AcumuladoComponent,
    SubtituloComponent,
    VistoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
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
  TotaisDiaService,
  DonutService,
  DonutCenterService,
  MovimentoService,
  AcumuladoService,
  SubtituloService,
  VistoService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

