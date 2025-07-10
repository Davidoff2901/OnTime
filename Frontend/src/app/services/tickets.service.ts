import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Festival, Lineup, Ticket, TicketDTO } from '../models/models.type';

@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    http = inject(HttpClient)
    private apiUrl = 'http://localhost:1234/api/tickets';

    tickets = signal<Ticket[] | null>(null);
    error = signal<string | null>(null);

    constructor() { }

    getTickets(): Observable<Ticket[]> {
        return this.http.get<Ticket[]>(this.apiUrl)
    }

    createTicket(ticket: TicketDTO): Observable<TicketDTO> {
        return this.http.post<TicketDTO>(this.apiUrl, ticket)
    }

    getFestivalsByTicket(email: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${email}`)
    }
}
