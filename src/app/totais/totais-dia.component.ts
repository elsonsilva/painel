import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { ITotais } from './totais';
import { TotaisDiaService } from './totais-dia.service';


@Component({
  selector: 'app-totais-dia',
  templateUrl: './totais-dia.component.html',
  styleUrls: ['./totais-dia.component.scss']
})
export class TotaisDiaComponent implements OnInit {

   errorMessage: string;
   totaisDia: ITotais[] = [];
   private display: boolean; // whether to display info in the component
                             // use *ngIf="display" in your html to take
                             // advantage of this
 
   private alive: boolean; // used to unsubscribe from the IntervalObservable
                           // when OnDestroy is called.

    constructor(sanitizer: DomSanitizer, private _totaisDiaService: TotaisDiaService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }

  // ngOnInit(): void {
    
  //   this._totaisDiaService.getTotais()
  //     .subscribe(totaisDia => {
  //       this.totaisDia = totaisDia;
  //     },
  //     error => this.errorMessage = <any>error);
  // }

  ngOnInit(): void {
    // get our data immediately when the component inits
    this._totaisDiaService.getTotais()
      .first() // only gets fired once
      .subscribe((totaisDia) => {
        this.totaisDia = totaisDia;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(5000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._totaisDiaService.getTotais()
          .subscribe(totaisDia => {
            this.totaisDia = totaisDia;
          });
      });
  }

  ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
  }

}
