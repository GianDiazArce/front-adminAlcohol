import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class SaleService {

    public url;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
     }

     // para el token: .set('Authorization', this.token);

    getSales(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'sale', {headers});
    }

    save(token, sale): Observable <any> {

        let params = "json="+ JSON.stringify(sale);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);
                                        
        return this._http.post(this.url + 'sale', params, {headers});

    }

    updateStock(id, product, token):Observable<any>{
        let params = "json=" + JSON.stringify(product);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.put(this.url + 'product/updateStock/' + id, params, {headers});
    }
    
}