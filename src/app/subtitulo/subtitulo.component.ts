import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { ISubtitulo } from './subtitulo';
import { SubtituloService } from './subtitulo.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.scss']
})
export class SubtituloComponent implements OnInit {

  subtitulos: ISubtitulo[] = [];

  errorMessage: string;

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(private _subtituloService: SubtituloService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }


  ngOnInit(): void {
    // get our data immediately when the component inits
    this._subtituloService.getSubtitulos()
      .first() // only gets fired once
      .subscribe((subtitulos) => {
        this.subtitulos = subtitulos;
        this.display = true;
      });

    IntervalObservable.create(30000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._subtituloService.getSubtitulos()
          .subscribe(subtitulos => {
            this.subtitulos = subtitulos;
          });
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
