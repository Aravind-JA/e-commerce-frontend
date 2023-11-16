import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminID = localStorage.getItem('admin-id');
  private _adminUrl = 'http://localhost:3333/admin/'
  private _loginUrl = 'http://localhost:3333/admin/login/';
  private _registerUrl = 'http://localhost:3333/admin/register/';

  constructor(private http: HttpClient) { }

  LoginAdmin(body: any) {
    return this.http.post(this._loginUrl, body);
  }

  RegisterAdmin(body: any) {
    return this.http.post(this._registerUrl, body);
  }

  isAdminLoggedIn() {
    return !!(localStorage.getItem('admin-token') && (localStorage.getItem('admin-id')));
  }

  LogOutAdmin() {
    localStorage.removeItem('admin-id');
    localStorage.removeItem('admin-token');
  }

  GetAdminData() {
    return this.http.get(this._adminUrl + this.adminID);
  }
}
