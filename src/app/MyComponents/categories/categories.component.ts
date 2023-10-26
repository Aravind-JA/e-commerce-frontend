import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data: any;
  constructor(private service: MainServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.Category().subscribe((res: any) => {
      this.data = res;
    })
  }

  goToCategory(id: string) {
    this.router.navigate([`/category/${id}`]);
  }

}
