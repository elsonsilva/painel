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

import { IAcumulado } from './acumulado';

@Injectable()
export class AcumuladoService {

    private _acumuladoUrl = 'assets/dados/ACUMULADO_DIA.json';

    constructor(private _http: Http) { }

    getAcumulados(): Observable<IAcumulado[]> {
        return this._http.get(this._acumuladoUrl)
            .retry(3)
            .map((response: Response) => <IAcumulado[]> response.json())
            .do(data => console.log('ACUMULADO: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
