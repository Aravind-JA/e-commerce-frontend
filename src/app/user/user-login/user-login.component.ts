import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Input() showLogin!: boolean;
  @Output() showLoginChange = new EventEmitter<boolean>();

  loginUserData: { email: string, password: string } = { email: '', password: '' };

  constructor(private _userAuth: UserService, private _router: Router) { }

  ngOnInit(): void {

  }

  async CloseLogin() {
    this.showLogin = false
    this.showLoginChange.emit(this.showLogin);
  }

  LoginUser() {
    this._userAuth.LoginUser(this.loginUserData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('user-token', res.token);
      localStorage.setItem('user-id', res.id);
      this.CloseLogin();
    }, (err) => {
      console.log(err);
    });
  }

  async goToRegister() {
    await this.CloseLogin();
    this._router.navigate(['register']);
  }
}

