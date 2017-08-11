import { Component, OnInit, AfterContentInit } from '@angular/core';

import { IAcumulado } from './acumulado';
import { ITotais} from './../totais/totais';
import { AcumuladoService} from './acumulado.service';
import { TotaisDiaService } from './../totais/totais-dia.service';

@Component({
  selector: 'app-acumulado',
  templateUrl: './acumulado.component.html',
  styleUrls: ['./acumulado.component.scss']
})
export class AcumuladoComponent implements OnInit, AfterContentInit {

  acumulados: IAcumulado[] = [];

  totaisDia: ITotais[] = [];

  errorMessage: string;

  constructor(private _acumuladoService: AcumuladoService, private _totaisDiaService: TotaisDiaService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
  }

  ngOnInit(): void {
    this._acumuladoService.getAcumulados()
      .subscribe(acumulados => {
        this.acumulados = acumulados;
      },
      error => this.errorMessage = <any>error);
  }

    ngAfterContentInit(): void {
    this._totaisDiaService.getTotais()
      .subscribe(totaisDia => {
        this.totaisDia = totaisDia;
      },
      error => this.errorMessage = <any>error);
  }

}
