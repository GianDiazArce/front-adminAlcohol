import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class ProveedorService {

    public url;

    constructor(
        private _http: HttpClient
        ) {
        this.url = global.url;
     }

    
    public getProviders(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'provider', {headers});
    }

    public save(token, proveedor): Observable <any> {

        let params = "json=" + JSON.stringify(proveedor);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.post(this.url + 'provider', params, {headers});
    }
    
}