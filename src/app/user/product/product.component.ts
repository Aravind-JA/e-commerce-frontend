import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../../Services/main-service.service';
import { UserService } from 'src/app/Services/user.service';

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
  categoryData: any;
  currentImages: string[] = [];
  currentIndex: number = 0;
  nextImages: boolean = false;
  prevImages: boolean = false;
  inCart: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private service: MainServiceService,
    private _userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params: any) => {
      this.productId = params.get('id');
      await this.Initialise(this.productId);
      window.scrollTo(0, 0);
    });

    if (this._userService.isLoggedIn()) {
      this._userService.GetCartData().subscribe((res: any) => {
        res.items.forEach((item: any) => {
          if (item.product_id === this.productId) {
            this.inCart = true;
          }
        });
      });
    }
  }

  async Initialise(id: string) {
    this.service.FindProduct(id).subscribe((data: any) => {
      this.product = data;
      this.images = [];
      this.images.push(data.image);
      this.images.push(...data.images);
      this.Images();
      if (this.images.length > 4) {
        this.nextImages = true;
      }
      this.service.FindCategory(this.product.category_id).subscribe((res: any) => {
        this.categoryData = res;
      });
    });
  }

  async Images() {
    this.currentImages = this.images.slice(this.currentIndex, this.currentIndex + 4);
  }

  Next() {
    this.currentImage++;
  }

  Prev() {
    this.currentImage--;
  }

  moreImage() {
    this.currentIndex += 4;
    this.currentImages = [];
    this.Images();
    this.nextImages = false;
    this.prevImages = true;
  }
  prevImage() {
    this.currentIndex = 0;
    this.currentImages = [];
    this.Images();
    this.nextImages = true;
    this.prevImages = false;
  }

  AddToCart(id: string) {
    if (this._userService.isLoggedIn()) {
      this._userService.AddToCart(id).subscribe((res:any) => {
        console.log(res);
        this.inCart = true;
      }
      )

    } else {
      this._router.navigate(['login']);
    }
  }

  GoToCart() {
    this._router.navigate(['cart']);
  }

}
