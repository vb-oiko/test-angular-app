import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  private _API_URL: string = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  getData ():Observable<any> {

    return this._http.get(this._API_URL)
      .pipe(
        
        map(o => {
          return o['hits'];
        })
      ) as Observable<any>;
  };
}
