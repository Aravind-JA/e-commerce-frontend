import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService {

  token = localStorage.getItem('admin-token');
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
