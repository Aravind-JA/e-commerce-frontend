import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  AdminProducts: any = {};
  AdminData: any = {};

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this._adminService.GetAdminData().subscribe((res) => {
      this.AdminData = res;
    });
    this._adminService.AdminProducts.subscribe((res) => {
      this.getProducts();
    });
    this.getProducts();
  }

  getProducts() {
    this._adminService.adminProducts().subscribe((res) => {
      this.AdminProducts = res;
    })
  }

  DeleteProduct(id: string) {
    this._adminService.DeleteProduct(id);
  }

}
