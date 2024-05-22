import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPost } from '../model/i-post';

@Injectable({
  providedIn: 'root'
})
export class ActivePostComponent {
  private jsonUrl = '../assets/db.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<iPost[]> {
    return this.http.get<iPost[]>(this.jsonUrl);
  }
}

