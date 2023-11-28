import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  cartData: any;
  CartProducts: any[] = [];
  totalAmount!: number;
  totalDiscount!: number;
  totalPrice!: number;
  totalQuantity!: number;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _mainService: MainServiceService) { }

  async ngOnInit(): Promise<void> {
    this._userService.CartData.subscribe(() => {
      // this.CartProducts = [];
      this.Initialise();
    });
    this.Initialise();
  }

  Initialise() {
    this.CartProducts = [];
    this._userService.GetCartData().subscribe(async (res: any) => {
      const items = res.items;
      for (let i = 0; i < items.length; i++) {
        this._mainService.FindProduct(items[i].product_id).subscribe(async (res: any) => {
          res.quantity = 1;
          this.CartProducts.push(res);
          console.log(this.CartProducts);
          await this.TotalAmount();
        });
      }
    });
  }

  AddQuantity(index: number) {
    const product = this.CartProducts[index];
    if (product.quantity < 10) {
      product.quantity += 1;
      this.TotalAmount();
    }
  }

  Decrement(index: number) {
    const product = this.CartProducts[index];
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.TotalAmount();
    }
  }


  RemoveCart(id: string, index: number) {
    this.CartProducts.splice(index, 1);
    this.TotalAmount();
    this._userService.RemoveFromCart(id);
  }

  async TotalAmount() {
    let totalDiscount: number = 0;
    let totalPrice: number = 0;
    let totalQuantity: number = 0;

    for (let i = 0; i < this.CartProducts.length; i++) {
      const product = this.CartProducts[i];
      totalQuantity += product.quantity;
      totalPrice += (product.quantity * product.price);
      totalDiscount += (product.quantity * product.price * product.discount / 100);
    }
    this.totalAmount = totalPrice - totalDiscount;
    this.totalPrice = totalPrice;
    this.totalDiscount = totalDiscount;
    this.totalQuantity = totalQuantity;
  }

  PlaceOrder() {

    const orderBody: {
      customer_id: string | null;
      order_date: number;
      total_price: number;
      items: { product_id: any; admin_id: any; quantity: any; }[];
    } = {
      customer_id: localStorage.getItem('user-id'),
      order_date: Date.now(),
      total_price: this.totalAmount,
      items: []
    };

    for (let i = 0; i < this.CartProducts.length; i++) {
      const product = this.CartProducts[i];

      const orderItem = {
        product_id: product.id,
        admin_id: product.admin_id,
        quantity: product.quantity
      }

      orderBody.items.push(orderItem);
    }

    this._userService.PlaceOrder(orderBody).subscribe((res) => {
      console.log(res);
    });
  }

}
