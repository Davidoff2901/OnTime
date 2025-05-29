import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize, of, tap } from 'rxjs';

interface CreateUserDto {
    username: string;
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:1234/api/users';
    http = inject(HttpClient)
    error = signal<string | null>(null);
    loading = signal(false);

    constructor() { }

    createUser(data: CreateUserDto) {
        return this.http.post(this.apiUrl + "/register", data).pipe(
            tap(res => {
                console.log(res)
            }),
            catchError(err => {
                this.error.set(err?.message || 'An error occurred');
                return of(null);
            }),
            finalize(() => this.loading.set(false))
        ).subscribe();
    }

    loginUser(data: { identifier: string, password: string }) {
        console.log(data)
        return this.http.post(this.apiUrl + "/login", data).pipe(
            tap(res => console.log(res)),
            catchError(err => {
                return (err);
            }),
            finalize(() => console.log('asd'))
        ).subscribe();
    }
}
