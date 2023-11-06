import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryId!: string;
  category: any;
  categoryData: any;
  constructor(private activeRoute: ActivatedRoute, private service: MainServiceService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(async (params: any) => {
      this.categoryId = params.get('id');
      await this.onQueryChange(this.categoryId);
    })
  }

  async onQueryChange(id: string) {
    this.service.FindCategory(id).subscribe((res) => {
      this.category = res;
    });

    this.service.CategoryProduct(id).subscribe((res) => {
      this.categoryData = res;
    });
  }
}
