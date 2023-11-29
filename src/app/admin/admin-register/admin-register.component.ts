import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  success: boolean = false;
  error: boolean = false;
  registrationError: string = '';
  conPassword: string = '';
  registerAdminData: {
    userName: string, phone: number | null, email: string, password: string
  } = { userName: '', phone: null, email: '', password: '' };

  constructor(private _adminService: AdminService, private _router: Router) { }

  ngOnInit(): void {

  }

  RegisterAdmin() {
    console.log(this.registerAdminData);
    this._adminService.RegisterAdmin(this.registerAdminData).subscribe((res: any) => {
      this.success = true;
    },
      (err) => {
        console.log(err);
        this.error = true;
        this.registrationError = err.error.message;
      }
    );
  }

  TryAgain() {
    this.error = false;
    this.success = false;
    this.registerAdminData = { userName: '', phone: null, email: '', password: '' };
  }

  goToLogin() {
    this._router.navigate(['admin/login'])
  }

}
