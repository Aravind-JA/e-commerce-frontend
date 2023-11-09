import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Category: any;
  currentId!: string;

  constructor(private service: MainServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.currentId = params.get('id');
    });
    this.service.Category().subscribe((data: any) => {
      this.Category = data;
      console.log(data);
    });
  }

  goToCategory(id: string) {
    this.router.navigate([`category/${id}`]);
  }
}
