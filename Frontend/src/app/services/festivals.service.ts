import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Festival } from '../models/festival.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalsService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/festivals';

  festivals = signal<Festival[] | null>(null);
  error = signal<string | null>(null);

  constructor() { }

  getFestivals(): Observable<Festival[]> {
    return this.http.get<Festival[]>(this.apiUrl)
  }

  createFestival(festival: Festival): Observable<Festival> {
    return this.http.post<Festival>(this.apiUrl, festival)
  }
}
