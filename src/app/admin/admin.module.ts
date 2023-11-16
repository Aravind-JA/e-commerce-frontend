import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginMainComponent } from './admin-login-main/admin-login-main.component';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginMainComponent,
    AdminSidebarComponent,
    AdminRegisterComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
