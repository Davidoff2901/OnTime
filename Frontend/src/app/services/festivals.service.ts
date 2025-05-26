import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Festival } from '../models/festival.type';
import { catchError, finalize, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalsService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/festivals';

  festivals = signal<Festival[] | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() { }

  getFestivals() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Festival[]>(this.apiUrl).pipe(
      tap(res => this.festivals.set(res)),
      catchError(err => {
        this.error.set(err?.message || 'An error occurred');
        return of(null);
      }),
      finalize(() => this.loading.set(false))
    ).subscribe();
  }

  createFestival(festival: Festival) {
    this.loading.set(true);
    this.error.set(null);

    this.http.post<Festival>(this.apiUrl, festival).pipe(
      tap(res => {
        const current = this.festivals();
        this.festivals.set(current ? [...current, res] : [res]);
      }),
      catchError(err => {
        this.error.set(err?.message || 'An error occurred');
        return of(null);
      }),
      finalize(() => this.loading.set(false))
    ).subscribe();
  }
}
