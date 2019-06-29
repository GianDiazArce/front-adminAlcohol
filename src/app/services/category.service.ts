import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
    public url;
    public token;

    constructor(private _http: HttpClient) {
        this.url = global.url;
        this.token = localStorage.getItem('token');
     }

     getCategories(): Observable<any>{


        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'category', {headers});
     }

     getCategory(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'category/'+ id, {headers});
     }

     newCategory(category): Observable <any> {

      let params = "json=" + JSON.stringify(category);

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                     .set('Authorization', this.token);

      return this._http.post(this.url + 'category', params , {headers});
     }

     getProductByCategory(id):Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'product/category/' + id, {headers});
     }

     update(token, id, category): Observable <any> {
        let params = "json=" + JSON.stringify(category);

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                     .set('Authorization', token);
         
        return this._http.put(this.url + 'category/' + id, params, {headers});
     }

     delete(id): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', this.token);
         return this._http.delete(this.url + 'category/'+id, {headers});
     }
    
}