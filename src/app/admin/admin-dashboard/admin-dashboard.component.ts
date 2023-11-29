import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  AdminData: any;

  constructor(private _adminService:AdminService) { }
  
  ngOnInit(): void {
    this._adminService.GetAdminData().subscribe((res) => {
      this.AdminData = res;
      console.log(res);
    })
  }

}
