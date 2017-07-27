import { Component, OnInit } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import * as shape from 'd3-shape';
import * as d3 from 'd3';

import { DialogComponent } from './dialog/dialog.component';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: IProduct[] = [];

  isDarkTheme = false;
  title = 'Hello World!';
  errorMessage: string;

  private categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

  constructor(sanitizer: DomSanitizer, private _productService: ProductService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
      },
      error => this.errorMessage = <any>error);
  }

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }

}
