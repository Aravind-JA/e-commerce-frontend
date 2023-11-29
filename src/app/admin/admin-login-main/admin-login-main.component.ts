import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-login-main',
  templateUrl: './admin-login-main.component.html',
  styleUrls: ['./admin-login-main.component.css']
})
export class AdminLoginMainComponent {

  loginError: boolean = false;

  loginAdminData: { userName: string, password: string } = { userName: '', password: '' };

  constructor(private _adminService: AdminService, private _router: Router) { }

  LoginAdmin() {
    this._adminService.LoginAdmin(this.loginAdminData)
      .subscribe((res: any) => {
        localStorage.setItem('admin-token', res.token);
        localStorage.setItem('admin-id', res.id);
        this._router.navigate(['admin/dashboard']);
      },
        (err) => {
          this.loginError = true;
        }
      );
  }

  goToRegister() {
    this._router.navigate(['admin/register']);
  }

  tryAgain() {
    this.loginError = false;
    this.loginAdminData = { userName: '', password: '' };
    this._router.navigate(['admin/login']);
  }

}
