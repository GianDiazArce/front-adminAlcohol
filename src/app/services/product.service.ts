import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    public url;
    public token;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
        this.token = localStorage.getItem('token');
     }

    
    public getProducts(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'product', {headers});
    }

    public save(product): Observable<any>{

        let params = "json="+ JSON.stringify(product);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', this.token);

        return this._http.post(this.url + 'product', params, {headers});
    }

    public delete(id):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', this.token);

        return this._http.delete(this.url + 'product/' + id, {headers});
    }
    
}