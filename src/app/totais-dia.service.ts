import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITotaisDia } from './totais-dia';

@Injectable()
export class TotaisDiaService {
    // private _productUrl = 'assets/dados/products.json';
    private _totaisUrl = 'assets/dados/TOTAIS_DIA.json';

    constructor(private _http: Http) { }

    getTotais(): Observable<ITotaisDia[]> {
        return this._http.get(this._totaisUrl)
            .map((response: Response) => <ITotaisDia[]> response.json())
            .do(data => console.log('TOTAIS: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
