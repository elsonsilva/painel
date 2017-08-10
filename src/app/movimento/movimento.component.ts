import { Component, OnInit } from '@angular/core';

import { IMovimento } from './../movimento';
import { MovimentoService } from './../movimento.service';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.scss']
})
export class MovimentoComponent implements OnInit {

  movimentos: IMovimento[] = [];
  
  errorMessage: string;

  constructor(private _movimentoService: MovimentoService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
  }

  ngOnInit(): void {
    this._movimentoService.getMovimentos()
      .subscribe(movimentos => {
        this.movimentos = movimentos;
      },
      error => this.errorMessage = <any>error);
  }

}
