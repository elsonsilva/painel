import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//import * as shape from 'd3-shape';
//import * as d3 from 'd3';

import { IDonut} from '../donut';
import { DonutCenterService } from '../donut-center.service';


@Component({
  selector: 'app-donut-center',
  templateUrl: './donut-center.component.html',
  styleUrls: ['./donut-center.component.scss']
})
export class DonutCenterComponent implements OnInit {

   errorMessage: string;

   donutcenters: IDonut[] = [];

    constructor(sanitizer: DomSanitizer, private _donutCenterService: DonutCenterService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.

  }

  ngOnInit(): void {
    this._donutCenterService.getDonutCenter()
      .subscribe(donutcenters => {
        this.donutcenters = donutcenters;
      },
      error => this.errorMessage = <any>error);
  }

}