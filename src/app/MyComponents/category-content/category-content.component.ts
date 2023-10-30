import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent implements OnInit {
  @Input() data: any;
  CategoryData: any = null;

  constructor(private service: MainServiceService, private route: Router) { }
  async ngOnInit(): Promise<void> {
    await this.Intialise();
  }

  async Intialise() {
    this.service.CategoryProduct(this.data.id).subscribe((res: any) => {
      this.CategoryData = res.slice(0, 6);
    });
  }

  goCategory(id: string) {
    this.route.navigate([`category/${id}`]);
  }

}
