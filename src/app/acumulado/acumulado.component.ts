// import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { IAcumulado } from './acumulado';
// import { ITotais} from './../totais/totais';
import { AcumuladoService} from './acumulado.service';
import { TotaisDiaService } from './../totais/totais-dia.service';

@Component({
  selector: 'app-acumulado',
  templateUrl: './acumulado.component.html',
  styleUrls: ['./acumulado.component.scss']
})
 // export class AcumuladoComponent implements OnInit, AfterContentInit {
  export class AcumuladoComponent implements OnInit {

  acumulados: IAcumulado[] = [];

  // totaisDia: ITotais[] = [];

  errorMessage: string;
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

private alive: boolean; // used to unsubscribe from the IntervalObservable
// when OnDestroy is called.

  constructor(private _acumuladoService: AcumuladoService, private _totaisDiaService: TotaisDiaService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }

  ngOnInit(): void {
    // get our data immediately when the component inits
    this._acumuladoService.getAcumulados()
      .first() // only gets fired once
      .subscribe((acumulados) => {
        this.acumulados = acumulados;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(30000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._acumuladoService.getAcumulados()
          .subscribe(acumulados => {
            this.acumulados = acumulados;
          });
      });
  }

  ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
  }

  //   ngAfterContentInit(): void {
  //   this._totaisDiaService.getTotais()
  //     .subscribe(totaisDia => {
  //       this.totaisDia = totaisDia;
  //     },
  //     error => this.errorMessage = <any>error);
  // }

}
