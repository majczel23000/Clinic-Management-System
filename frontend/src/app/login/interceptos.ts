import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { LoginService } from '../shared/services/login.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private loginService: LoginService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let apiService = this.injector.get(LoginService);
    console.log(`Bearer ${this.loginService.getToken()}`);
    let credentialsReq;
    if(localStorage.getItem('access-token')){
      credentialsReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.getToken()}`
        }
      });
    } else {
      credentialsReq = req.clone({
      });
    }
     return next.handle(credentialsReq)//.pipe(
  //     tap(
  //       (event: HttpEvent<any>) => {
  //           console.log(event);
  //       },
  //       (err: any) => {
  //         if(err instanceof HttpErrorResponse){
  //           if(err.status === 401) {
  //             console.log(err);
  //             this.loginService.clearToken();
  //             this.router.navigate(['/']);
  //           }
  //         }
  //     }
  //   )
  // );
  }
}