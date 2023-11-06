import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private service:MainServiceService) { }
  ngOnInit(): void {
    this.service.Category().subscribe((res: any) => {
      this.data = res;
    });
  }
}
