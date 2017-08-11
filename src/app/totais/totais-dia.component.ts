import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
