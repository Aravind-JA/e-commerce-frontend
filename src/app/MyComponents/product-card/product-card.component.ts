import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() data: any;
  constructor(private router: Router) { }

  goToProduct(id: string) {
    this.router.navigate([`product/${id}`]);
  }
}
