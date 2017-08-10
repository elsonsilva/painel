import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//import * as shape from 'd3-shape';
//import * as d3 from 'd3';

import { ITotaisDia } from '../totais-dia';
import { TotaisDiaService } from '../totais-dia.service';


@Component({
  selector: 'app-totais',
  templateUrl: './totais.component.html',
  styleUrls: ['./totais.component.scss']
})
export class TotaisComponent implements OnInit {

   errorMessage: string;

   totaisDia: ITotaisDia[] = [];

    constructor(sanitizer: DomSanitizer, private _totaisDiaService: TotaisDiaService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.

  }

  ngOnInit(): void {
    this._totaisDiaService.getTotais()
      .subscribe(totaisDia => {
        this.totaisDia = totaisDia;
      },
      error => this.errorMessage = <any>error);
  }

}
