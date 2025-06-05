import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { isLoading } from '../signals/loader.signal';

let activeRequests = 0;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    if (activeRequests === 0) {
        isLoading.set(true);
    }
    activeRequests++;

    return next(req).pipe(
        finalize(() => {
            activeRequests--;
            if (activeRequests === 0) {
                isLoading.set(false);
            }
        })
    );
};
