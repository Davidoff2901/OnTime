import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    constructor() { }

    createUser(data: CreateUserDto) {
        return this.http.post(this.apiUrl, data);
    }
}
