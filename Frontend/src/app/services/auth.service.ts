import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:1234/api/users';
    http = inject(HttpClient)
    error = signal<string | null>(null);
    _token = signal<string | null>(localStorage.getItem('token'));

    readonly token = computed(() => this._token());
    readonly isLoggedIn = computed(() => !!this._token());

    constructor() {
    }

    loginUser(data: { identifier: string; password: string }): Observable<{ data: string }> {
        return this.http.post<{ data: string }>(this.apiUrl + "/login", data);
    }

    logoutUser() {
        if (this.token()) {
            localStorage.removeItem("token")
            this._token.set(null)
        }
    }

    setToken(token: string) {
        localStorage.setItem("token", token);
        this._token.set(token);
    }

    loadJwt() {
        const tkn = localStorage.getItem("token")
        if (tkn) this._token.set(tkn)
        return this.token
    }
}
