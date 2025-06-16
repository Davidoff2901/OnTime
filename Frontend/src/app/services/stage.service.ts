import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from '../models/models.type';

@Injectable({
    providedIn: 'root'
})
export class StagesService {
    http = inject(HttpClient)
    private apiUrl = 'http://localhost:1234/api/stages';

    stages = signal<Stage[] | null>(null);
    error = signal<string | null>(null);

    constructor() { }

    getStagesByFestival(festivalId: string): Observable<Stage[]> {
        return this.http.post<Stage[]>(this.apiUrl, festivalId)
    }
    createStage(stage: Stage): Observable<Stage> {
        return this.http.post<Stage>(this.apiUrl, stage)
    }
    updateStage(stage: Stage): Observable<Stage> {
        return this.http.put<Stage>(`${this.apiUrl}/${stage.id}`, stage)
    }
    deleteStage(stageId: string): Observable<Stage> {
        return this.http.delete<Stage>(`${this.apiUrl}/${stageId}`)
    }
}
