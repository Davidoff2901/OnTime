import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { User } from '../models/models.type';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:1234/api/users';
    http = inject(HttpClient)
    error = signal<string | null>(null);

    constructor() { }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/register`, user)
    }
    updateUser(user: User): Observable<{ user: User, token: string }> {
        return this.http.put<{ user: User, token: string }>(`${this.apiUrl}/${user.email}`, user)
    }
    changePassword(data: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/change-password`, data)
    }
    forgotPassword(email: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/forgot-password`, { email });
    }
    resetPassword(token: string, new_password: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/reset-password?token=${token}`, { new_password });
    }
}
