import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const posts = this.http.get<any>('https://jsonplaceholder.typicode.com/posts/');
    const albums = this.http.get<any>('https://jsonplaceholder.typicode.com/albums/');
    const users = this.http.get<any>('https://jsonplaceholder.typicode.com/users');
    return forkJoin([posts, albums, users])
  }
}
