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

    
    getProducts(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'product', {headers});
    }

    save(product): Observable<any>{

        let params = "json="+ JSON.stringify(product);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', this.token);

        return this._http.post(this.url + 'product', params, {headers});
    }

    delete(id):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', this.token);

        return this._http.delete(this.url + 'product/' + id, {headers});
    }

    getProduct(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url+ 'product/'+ id, {headers});
    }

    update(token,id,product): Observable<any>{

        let params = "json="+ JSON.stringify(product);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.put(this.url + 'product/' + id, params, {headers});
    }

    
}