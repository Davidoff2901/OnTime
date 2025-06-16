import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Performances } from '../models/models.type';

@Injectable({
  providedIn: 'root'
})
export class PerformancesService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/performances';

  performances = signal<Performances[] | null>(null);
  error = signal<string | null>(null);

  constructor() { }

  // getPerformances(): Observable<Performances> {
  //   return this.http.get<Performances>(this.apiUrl)
  // }
  getPerformancesByFilter(filter: string): Observable<Performances[]> {
    return this.http.get<Performances[]>(`${this.apiUrl}/${filter}`)
  }
  createPerformance(performance: Performances): Observable<Performances> {
    return this.http.post<Performances>(this.apiUrl, performance)
  }
  deletePerofrmance(performanceId: string): Observable<Performances> {
    return this.http.delete<Performances>(`${this.apiUrl}/${performanceId}`)
  }
}
