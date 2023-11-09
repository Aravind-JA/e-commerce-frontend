import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  showLogin: boolean = false;

  private _loginUrl = 'http://localhost:3333/customer/login';
  private _registerUrl = 'http://localhost:3333/customer/register';

  LoginUser(user: object) {
    return this.http.post<any>(this._loginUrl, user);
  }

  RegisterUser(body: object) {
    return this.http.post<any>(this._registerUrl, body);
  }

  isLoggedIn() {
    return !!localStorage.getItem('user-token');
  }

}
