import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

interface CreateUserDto {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
interface RegisterResponse {
    data: {
        first_name: string;
        last_name: string;
        email: string;
        birthday: Date
        phone: string
        country_code: string
    }
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'http://localhost:1234/api/users';
    http = inject(HttpClient)
    error = signal<string | null>(null);

    constructor() { }

    createUser(data: CreateUserDto): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(this.apiUrl + "/register", data)
    }

}
