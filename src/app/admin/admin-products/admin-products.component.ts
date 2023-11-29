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
  idToDelete!: string;
  showDelete: boolean = false;

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

  goToProduct(id: string) {
    console.log(id)
    window.open(`/product/${id}`)
  }



  DeleteProduct(id: string) {
    this.showDelete = true;
    this.idToDelete = id;
  }

  ConfirmDelete() {
    this._adminService.DeleteProduct(this.idToDelete);
    this.showDelete = false;
  }

}
