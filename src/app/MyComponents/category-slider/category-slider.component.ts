import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {

  constructor(private service: MainServiceService,private route:Router) { }

  categoryData: any;
  carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    onmouseover:true
  };

  ngOnInit(): void {
    this.service.Category().subscribe((data: any) => {
      this.categoryData = data;
    });
  }

  goCategory(id:string) {
    this.route.navigate([`category/${id}`]);
  }
}
