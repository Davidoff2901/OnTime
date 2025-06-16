import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:1234/api/users';
    http = inject(HttpClient)
    router = inject(Router)
    snackBar = inject(MatSnackBar)
    error = signal<string | null>(null);
    _token = signal<string | null>(localStorage.getItem('token'));

    readonly token = computed(() => this._token());
    readonly isLoggedIn = computed(() => !!this._token());

    constructor() {
        this.loadJwt()
    }

    loginUser(data: { identifier: string; password: string }): Observable<{ data: string }> {
        return this.http.post<{ data: string }>(this.apiUrl + "/login", data);
    }

    logoutUser() {
        if (this.token()) {
            localStorage.removeItem("token")
            this._token.set(null)
            this.router.navigate(["/"])
            this.snackBar.open(`Token expired!`, 'Close', { duration: 4000 });
        }
    }

    setToken(token: string) {
        localStorage.setItem("token", token);
        this._token.set(token);
    }

    loadJwt() {
        const tkn = localStorage.getItem("token")
        if (tkn) {
            this._token.set(tkn);
        } else {
            this._token.set(null);
        }
        return this._token();
    }

    getEmail() {
        const tkn = this.token()
        if (!tkn) {
            return
        }
        return jwtDecode<{ exp: number, iat: number, email: string }>(tkn).email
    }
    getRole() {
        const tkn = this.token()
        if (!tkn) {
            return ''
        }
        return jwtDecode<{ exp: number, iat: number, role: string }>(tkn).role
    }
    getName() {
        const tkn = this.token()
        if (!tkn) {
            return ''
        }
        return jwtDecode<{ exp: number, iat: number, first_name: string }>(tkn).first_name
    }
    decodeToken() {
        const tkn = this.token()

        return jwtDecode<{ exp: number, iat: number, first_name: string, last_name: string, birthday: Date, country_code: string, email: string, phone: string }>(tkn!)
    }

    hasRequiredRoles(roles: string[]): boolean {
        if (!this.getRole()) {
            return false;
        }
        return roles.includes(this.getRole())
    }
    isTokenExpired(): boolean {
        const currentToken = this.token();

        if (!currentToken) {
            return true;
        }

        try {
            const decoded: { exp: number } = jwtDecode(currentToken);
            const currentTime = Math.floor(Date.now() / 1000);
            return decoded.exp < currentTime;
        } catch (error) {
            console.error("Error decoding token for expiry check:", error);
            return true;
        }
    }
}
