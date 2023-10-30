import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../Services/main-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId!: string;
  product: any;
  images: string[] = [];
  currentImage: number = 0;

  constructor(private route: ActivatedRoute, private service: MainServiceService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params: any) => {
      this.productId = params.get('id');
      await this.Initialise(this.productId);
    });
  }

  async Initialise(id: string) {
    this.service.FindProduct(id).subscribe((data: any) => {
      this.product = data;
      console.log(data);
      this.images.push(data.image);
      this.images.push(...data.images);
    });
  }

  Next() {
    this.currentImage++;
  }

  Prev() {
    this.currentImage--;
  }

}
