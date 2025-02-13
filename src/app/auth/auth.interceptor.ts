import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted! ', req);
        const token = this.authService.getAuthToken();

        //if token is available, add it to the request headers
        if (token) {
            const clonedRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Cloned Request: ', clonedRequest);
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }
}