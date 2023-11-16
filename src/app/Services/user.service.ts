import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  showLogin: boolean = false;

  private UserId = localStorage.getItem('user-id');

  private _loginUrl = 'http://localhost:3333/customer/login';
  private _registerUrl = 'http://localhost:3333/customer/register';
  private _cartUrl = 'http://localhost:3333/cart/';
  private _orderUrl = 'http://localhost:3333/order/';

  LoginUser(user: object) {
    return this.http.post(this._loginUrl, user);
  }

  RegisterUser(body: object) {
    return this.http.post<any>(this._registerUrl, body);
  }

  LogoutUser() {
    localStorage.clear();
  }

  isLoggedIn() {
    return !!localStorage.getItem('user-token');
  }


  GetCartData() {
    return this.http.get(this._cartUrl + this.UserId);
  }

  AddToCart(id: string) {
    return this.http.post(this._cartUrl + this.UserId, { product_id: id });
  }

  RemoveFromCart(id: string) {
    return this.http.delete(this._cartUrl + this.UserId + '/' + id);
  }

  PlaceOrder(body: any) {
    return this.http.post(this._orderUrl, body);
  }
}