import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Performances } from '../models/models.type';

@Injectable({
  providedIn: 'root'
})
export class LineupService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:1234/api/lineup';

  lineup = signal<Performances[] | null>(null);
  error = signal<string | null>(null);

  constructor() { }

}
