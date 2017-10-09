import { Component, OnInit } from '@angular/core';

import { IVistoPost } from './vistopost';
import { VistoService } from './visto.service';

@Component({
  selector: 'app-visto',
  templateUrl: './visto.component.html',
  styleUrls: ['./visto.component.scss']
})
export class VistoComponent implements OnInit {

    // vistopost: IVistoPost[] = [];
    vistopost : any;
    errorMessage: string;
    
    constructor(
        private movieObservableService: VistoService) {
       
        this.vistopost = '{ "usuario": "usuario@teste.com.br", "senha": "123456"}';
    }

    ngOnInit() {
      this.movieObservableService
      // .createService('https://teste-caixa.herokuapp.com/api.php','{ "usuario": "usuario@teste.com.br","senha": "123456"}')
       .createService('https://teste-caixa.herokuapp.com/api.php', this.vistopost)
      .subscribe(
          result => console.log(result),
          error => this.errorMessage = <any>error
  );  
    }
}
