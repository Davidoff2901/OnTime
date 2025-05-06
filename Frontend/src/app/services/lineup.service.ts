import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineupService {
  http = inject(HttpClient)

  constructor() { }

  testGet(){
    return this.http.get("url");
  }
  testPost(){
    // return this.http.post("url");
  }
}
