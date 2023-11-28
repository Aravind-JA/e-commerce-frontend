import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from '../Guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginMainComponent } from './admin-login-main/admin-login-main.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: AdminLoginMainComponent },
      { path: 'register', component: AdminRegisterComponent },
      { path: 'dashboard', component: AdminDashboardComponent, canActivate: [adminAuthGuard] },
      { path: 'products', component: AdminProductsComponent, canActivate: [adminAuthGuard] },
      { path: 'orders', component: AdminOrdersComponent, canActivate: [adminAuthGuard] },
      { path: 'profile', component: AdminProfileComponent, canActivate: [adminAuthGuard] },
      { path: 'add-product', component: AddProductComponent, canActivate: [adminAuthGuard] },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
