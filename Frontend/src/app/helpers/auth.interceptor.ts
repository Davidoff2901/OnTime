import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService)
    const token = authService.loadJwt();
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    return next(req);
}


export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((err) => {
        console.log(err)
      if (err.status === 401) {
        authService.logoutUser(); // Logout and redirect
      }
      return throwError(() => err);
    })
  );
};