import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { IDonut } from './donut';

@Injectable()
export class DonutService {
    // private _productUrl = 'assets/dados/products.json';
    private _donutUrl = 'assets/dados/DONUT_DIA.json';

    constructor(private _http: Http) { }

    getDonut(): Observable<IDonut[]> {
        return this._http.get(this._donutUrl)
            .retry(3)
            .map((response: Response) => <IDonut[]> response.json())
            .do(data => console.log('DONUT: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}