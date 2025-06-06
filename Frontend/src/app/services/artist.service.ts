import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../models/models.type';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/artists';

  artists = signal<Artist[] | null>(null);
  error = signal<string | null>(null);

  constructor() { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiUrl)
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist)
  }
}
