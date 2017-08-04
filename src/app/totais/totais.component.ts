import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//import * as shape from 'd3-shape';
//import * as d3 from 'd3';

import { ITotais } from '../totais';
import { TotaisService } from '../totais.service';


@Component({
  selector: 'app-totais',
  templateUrl: './totais.component.html',
  styleUrls: ['./totais.component.scss']
})
export class TotaisComponent implements OnInit {

   errorMessage: string;

   totais: ITotais[] = [];

    constructor(sanitizer: DomSanitizer, private _totaisService: TotaisService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.

  }

  ngOnInit(): void {
    this._totaisService.getTotais()
      .subscribe(totais => {
        this.totais = totais;
      },
      error => this.errorMessage = <any>error);
  }

}
