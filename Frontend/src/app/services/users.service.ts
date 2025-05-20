import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    constructor(private http: HttpClient) { }

    createUser(data: CreateUserDto) {
        return this.http.post(this.apiUrl, data);
    }
}
