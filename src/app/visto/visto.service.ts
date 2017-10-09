import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class VistoService {
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json, text/plain, */*' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    createService(url: string, param: string): Observable<any> {
      //let body = JSON.stringify(param);
      let body = param
      return this.http
          .post(url, body, this.options)
          .map(this.extractData)
          .do(data => console.log('VISTO: ' +  JSON.stringify(data)))
          .catch(this.handleError);
      }   

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}