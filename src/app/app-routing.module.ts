import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { CategoryComponent } from './user/category/category.component';
import { ProductComponent } from './user/product/product.component';
import { SearchResultComponent } from './user/search-result/search-result.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { userAuthGuard } from './Guards/user-auth.guard';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginMainComponent } from './user/user-login-main/user-login-main.component';
import { AdminLoginMainComponent } from './admin/admin-login-main/admin-login-main.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'login', component: UserLoginMainComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'cart', component: UserCartComponent, canActivate: [userAuthGuard] },
  {
    path: 'admin', children: [
      { path: 'login', component: AdminLoginMainComponent },
      { path: 'register', component: AdminRegisterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
