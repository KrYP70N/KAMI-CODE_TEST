import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

interface POST_PAYLOAD {
  id?: string
  uid?: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getData(payload?: any): Observable<any> {
    console.log(payload, 'payload')
    let params = new HttpParams();

    // Loop through the payload object and set parameters
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        params = params.set(key, payload[key]);
      }
    }

    // Make the HTTP GET request with the constructed params
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/', { params });
  }

}
