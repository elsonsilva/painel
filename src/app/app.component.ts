import { Component, OnInit} from '@angular/core';
import { MdIconRegistry, MdDialog, MdButtonModule, MdGridListModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// import * as shape from 'd3-shape';
// import * as d3 from 'd3';

import { DialogComponent } from './dialog/dialog.component';

import { distinct } from '@progress/kendo-data-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkTheme = false;
  title = 'Hello World!';
  errorMessage: string;

  public labelContent(e: any): string {
    return `${e.category}: \n ${e.value}%`;
  }

  constructor(sanitizer: DomSanitizer) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}

