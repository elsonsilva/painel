import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { IMovimento } from './movimento';
import { MovimentoService } from './movimento.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.scss']
})
export class MovimentoComponent implements OnInit {

  movimentos: IMovimento[] = [];

  errorMessage: string;

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(private _movimentoService: MovimentoService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }


  ngOnInit(): void {
    // get our data immediately when the component inits
    this._movimentoService.getMovimentos()
      .first() // only gets fired once
      .subscribe((movimentos) => {
        this.movimentos = movimentos;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(30000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._movimentoService.getMovimentos()
          .subscribe(movimentos => {
            this.movimentos = movimentos;
          });
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}

