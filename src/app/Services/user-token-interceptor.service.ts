import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserTokenInterceptorService implements HttpInterceptor {

  token = localStorage.getItem('user-token');
  constructor() { }

  intercept(req: any, next: any) {
    let tokenizedReq = req.clone({
      setHeaders: {
        authorization: this.token
      }
    });
    if (this.token) {
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}
