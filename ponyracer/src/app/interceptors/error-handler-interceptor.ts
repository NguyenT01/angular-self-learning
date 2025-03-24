import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Router } from '@angular/router';
import { ErrorHandler } from "../handlers/error-handler";
import { tap } from "rxjs";

export const errorHandlerInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) : Observable<HttpEvent<unknown>> =>{
    const router = inject(Router);
    const errorHandler = inject(ErrorHandler);

    return next(req).pipe(
        tap({
            error: (errorReponse: HttpErrorResponse) => {
                if(errorReponse.status === HttpStatusCode.Unauthorized){
                    router.navigateByUrl('/login');
                }
                else{
                    errorHandler.handle(errorReponse);
                }
            }
        })
    )
    
}