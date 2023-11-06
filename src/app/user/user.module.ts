import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../MyComponents/categories/categories.component';
import { CategorySliderComponent } from '../MyComponents/category-slider/category-slider.component';
import { CategoryContentComponent } from '../MyComponents/category-content/category-content.component';
import { ProductCardComponent } from '../MyComponents/product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryComponent } from './category/category.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    CategoryContentComponent,
    ProductCardComponent,
    CategoryComponent,
    CategorySliderComponent,
    ProductComponent,
    SearchResultComponent
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
  ]
})
export class UserModule { }
