import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:1234/api/users';
    http = inject(HttpClient)
    router = inject(Router)
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
            this.router.navigate(["/"])
        }
    }

    setToken(token: string) {
        localStorage.setItem("token", token);
        this._token.set(token);
    }

    loadJwt() {
        const tkn = localStorage.getItem("token")
        if (tkn) this._token.set(tkn)
        return this._token()
    }

    getEmail() {
        const tkn = localStorage.getItem("token")
        if (!tkn) {
            return
        }
        return jwtDecode<{ exp: number, iat: number, filtered: { email: string } }>(tkn).filtered.email
    }
}
