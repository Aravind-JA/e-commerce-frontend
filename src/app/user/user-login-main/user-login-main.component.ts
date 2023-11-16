import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login-main',
  templateUrl: './user-login-main.component.html',
  styleUrls: ['./user-login-main.component.css']
})
export class UserLoginMainComponent implements OnInit {

  loginUserData: { email: string, password: string } = { email: '', password: '' };

  constructor(private _userAuth: UserService, private _router: Router) { }


  ngOnInit(): void {

  }

  LoginUser() {
    console.log(this.loginUserData);

    if (this.loginUserData) {
      this._userAuth.LoginUser(this.loginUserData)
        .subscribe(
          (res: any) => {
            console.log(res);
            localStorage.setItem('user-token', res.token);
            localStorage.setItem('user-id', res.id);
            this._router.navigate(['home']);
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      console.log('loginUserData is null or undefined');
    }
  }


  async goToRegister() {
    this._router.navigate(['register']);
  }
}
