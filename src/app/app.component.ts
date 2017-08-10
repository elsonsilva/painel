import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

//import * as shape from 'd3-shape';
//import * as d3 from 'd3';

import { DialogComponent } from './dialog/dialog.component';

import { IProduct } from './product';
import { IProduct2 } from './product2';
import { ProductService } from './product.service';
import { Product2Service } from './meta.service';
import { TotaisDiaService } from './totais-dia.service';
import { distinct } from '@progress/kendo-data-query';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  products: IProduct[] = [];
  products2: IProduct2[] = [];
  
  isDarkTheme = false;
  title = 'Hello World!';
  errorMessage: string;

  // private categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

  public datadonut: any[] = [{
    kind: 'Hydro', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }];

  public labelContent(e: any): string {
    return `${e.category}: \n ${e.value}%`;
  }

  constructor(sanitizer: DomSanitizer, private _productService: ProductService, private _product2Service: Product2Service, private _totaisDiaService: TotaisDiaService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.

  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
      },
      // this._totaisService.getTotais()
      // .subscribe(totais => {
      //   this.totais = totais;
      // }
      error => this.errorMessage = <any>error);
  }

  ngAfterContentInit(): void {
    this._product2Service.getProducts2()
      .subscribe(products2 => {
        this.products2 = products2;
      },
      // this._totaisService.getTotais()
      // .subscribe(totais => {
      //   this.totais = totais;
      // }
      error => this.errorMessage = <any>error);
  }

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }


}
