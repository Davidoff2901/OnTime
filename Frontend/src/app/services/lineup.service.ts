import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Lineup, LineupDTO } from '../models/models.type';

@Injectable({
  providedIn: 'root'
})
export class LineupService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/lineup';

  lineup = signal<any[]>([]);
  error = signal<string | null>(null);

  constructor() { }

  addToLineup(lineup: LineupDTO): Observable<LineupDTO> {
    return this.http.post<LineupDTO>(this.apiUrl, lineup)
  }
  getUserLineup(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${email}`)
  }
}
