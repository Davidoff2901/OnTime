import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Festival } from '../models/models.type';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalsService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/festivals';

  festivals = signal<Festival[]>([]);
  error = signal<string | null>(null);

  constructor() { }

  getFestivals(): Observable<Festival[]> {
    return this.http.get<Festival[]>(this.apiUrl)
  }
  getFestivalsByOrganizer(organizerEmail: string): Observable<Festival[]> {
    return this.http.get<Festival[]>(`${this.apiUrl}/by-organizer/${organizerEmail} `)
  }
  createFestival(festival: Festival): Observable<Festival> {
    return this.http.post<Festival>(this.apiUrl, festival)
  }
  updateFestival(festival: Festival): Observable<Festival> {
    return this.http.put<Festival>(`${this.apiUrl}/${festival.id}`, festival)
  }
}
