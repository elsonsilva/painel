import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct2 } from './product2';

@Injectable()
export class Product2Service {
    // private _productUrl = 'assets/dados/products.json';
    private _product2Url = 'assets/dados/dados2.json';

    constructor(private _http: Http) { }

    getProducts2(): Observable<IProduct2[]> {
        return this._http.get(this._product2Url)
            .map((response: Response) => <IProduct2[]> response.json())
            .do(data => console.log('PRODUCTS2: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

