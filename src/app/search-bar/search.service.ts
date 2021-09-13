import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { 
    
  }
  
  getInfo(url: string): Observable<any>{
    return this.http.get(url);
  }
  getUsers(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
