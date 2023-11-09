import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  @Input() product: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  goToProduct(id: string) {
    this.router.navigate([`product/${id}`]);
  }
}
