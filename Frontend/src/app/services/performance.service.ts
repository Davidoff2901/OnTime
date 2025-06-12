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

  createPerformance(stage: Performances): Observable<Performances> {
    return this.http.post<Performances>(this.apiUrl, stage)
  }

  getPerformancesByFilter(filter: string): Observable<Performances[]> {
    return this.http.get<Performances[]>(`${this.apiUrl}/${filter}`)
  }
}
