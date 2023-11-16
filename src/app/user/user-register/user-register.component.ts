import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  success: boolean = false;
  error: boolean = false;

  registerUserData: {
    firstName: string, lastName: string, email: string, phone: number | null,
    password: string, address: string, district: string, state: string
  } = {
      firstName: '', lastName: '', email: '', phone: null,
      password: '', address: '', district: '', state: ''
    }

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {

  }

  async RegisterUser() {
    console.log(this.registerUserData);
    this._userService.RegisterUser(this.registerUserData).subscribe((res) => {
      console.log(res);
      this.success = true;
    },
      (err) => {
        console.log(err);
        this.error = true;
      }
    );
  }

  goToRegister() {
    this.error = false
    this._router.navigate(['register']);
  }

  goToLogin() {
    this._router.navigate(['login']);
  }
}
