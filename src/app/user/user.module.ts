import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../MyComponents/categories/categories.component';
import { CategorySliderComponent } from '../MyComponents/category-slider/category-slider.component';
import { CategoryContentComponent } from '../MyComponents/category-content/category-content.component';
import { ProductCardComponent } from '../MyComponents/product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryComponent } from './category/category.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './slider/slider.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserService } from '../Services/user.service';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { UserLoginMainComponent } from './user-login-main/user-login-main.component';
import { UserTokenInterceptorService } from '../Services/user-token-interceptor.service';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    CategoryContentComponent,
    ProductCardComponent,
    CategoryComponent,
    CategorySliderComponent,
    ProductComponent,
    SearchResultComponent,
    SliderComponent,
    ProductListComponent,
    SidebarComponent,
    UserCartComponent,
    UserRegisterComponent,
    UserLoginMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    CommonModule
  ],
  providers: [UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserTokenInterceptorService,
      multi: true
    }
  ]
})
export class UserModule { }
