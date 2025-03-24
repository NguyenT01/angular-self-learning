import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const githubAPIInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) : Observable<HttpEvent<unknown>> =>{
    
    if(req.url.includes('api.github.com')){
        const cloneReq = req.clone({
            setHeaders: {
                Authorization: `token 4567890123`
            }
        })
        return next(cloneReq);
    }
    return next(req);
}