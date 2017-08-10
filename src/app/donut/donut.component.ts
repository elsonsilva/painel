import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//import * as shape from 'd3-shape';
//import * as d3 from 'd3';

import { IDonut} from '../donut';
import { DonutService } from '../donut.service';
import { DonutCenterComponent } from './donut-center.component';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

   errorMessage: string;

   donuts: IDonut[] = [];

    constructor(sanitizer: DomSanitizer, private _donutService: DonutService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.

  }

  ngOnInit(): void {
    this._donutService.getDonut()
      .subscribe(donuts => {
        this.donuts = donuts;
      },
      error => this.errorMessage = <any>error);
  }

}
