import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { IDonut } from './donut';
import { DonutCenterService } from './donut-center.service';

@Component({
  selector: 'app-donut-center',
  templateUrl: './donut-center.component.html',
  styleUrls: ['./donut-center.component.scss']
})
export class DonutCenterComponent implements OnInit {

  errorMessage: string;

  donutcenters: IDonut[] = [];
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(sanitizer: DomSanitizer, private _donutCenterService: DonutCenterService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }

  ngOnInit(): void {
    // get our data immediately when the component inits
    this._donutCenterService.getDonutCenter()
      .first() // only gets fired once
      .subscribe((donutcenters) => {
        this.donutcenters = donutcenters;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(30000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this._donutCenterService.getDonutCenter()
          .subscribe(donutcenters => {
            this.donutcenters = donutcenters;
          });
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
