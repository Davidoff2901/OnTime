import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";



export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService)
    const router = inject(Router)

    if (!authService.token()) {
        router.navigate(['/login']);
        return false;
    }
    if (authService.isTokenExpired()) {
        authService.logoutUser();
        return false;
    }

    const requiredRoles: string[] | undefined = route.data['roles'];

    const userRole = authService.getRole();

    if (!requiredRoles || requiredRoles.length === 0) {
        return true;
    }

    if (!userRole) {
        return false
    }

    const hasRequiredRole = requiredRoles.includes(userRole);

    if (hasRequiredRole) {
        return true;
    } else {
        console.warn(`Access denied: User '${authService.getEmail()}' does not have the required role(s) for route '${state.url}'. `);
        return false;
    }
}