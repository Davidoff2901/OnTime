import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Festival } from '../models/festival.type';

@Injectable({
  providedIn: 'root'
})
export class FestivalsService {
  http = inject(HttpClient)

  constructor() { }

  testGet(){
    return this.http.get<Array<Festival>>("url");
  }
  testPost(){
    // return this.http.post("url");
  }
}
