import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { CategoryComponent } from './user/category/category.component';
import { ProductComponent } from './user/product/product.component';
import { SearchResultComponent } from './user/search-result/search-result.component';
import { UserCartComponent } from './user/user-cart/user-cart.component';
import { userAuthGuard } from './Guards/user-auth.guard';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'cart', component: UserCartComponent, canActivate: [userAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
