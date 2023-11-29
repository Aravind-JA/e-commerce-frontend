import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminID = localStorage.getItem('admin-id');
  private _adminUrl = 'http://localhost:3333/admin/'
  private _loginUrl = 'http://localhost:3333/admin/login/';
  private _registerUrl = 'http://localhost:3333/admin/register/';
  private _adminProductUrl = 'http://localhost:3333/product/admin/';
  private _productUrl = 'http://localhost:3333/product/';

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

  private _adminProducts = new Subject<void>();

  get AdminProducts() {
    return this._adminProducts;
  }

  adminProducts() {
    return this.http.get(this._adminProductUrl + this.adminID);
  }

  PostProduct(product: any) {
    return this.http.post(this._productUrl, product);
  }

  DeleteProduct(id: string) {
    this.http.delete(this._productUrl + id).subscribe((res) => {
      this.AdminProducts.next();
    });
  }

  EditProduct(id: string, product: any) {
    return this.http.put(this._productUrl + id, product);
  }
}
