import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  constructor(private http: HttpClient) { }

  Category() {
    return this.http.get('http://localhost:3333/category/');
  }

  FindCategory(id: string) {
    return this.http.get(`http://localhost:3333/category/${id}`);
  }

  CategoryProduct(id: string) {
    return this.http.get(`http://localhost:3333/product/category/${id}`);
  }

  FindProduct(id: string) {
    return this.http.get(`http://localhost:3333/product/${id}`);
  }
}
