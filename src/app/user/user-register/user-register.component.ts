import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  showLogin: boolean = false;
  registerUserData: {
    firstName: string, lastName: string, email: string, phone: number|null,
    password: string, address: string, district: string, state: string
  } = {
      firstName: '', lastName: '', email: '', phone: null,
      password: '', address: '', district: '', state: ''
    }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

  }

  async RegisterUser() {
    console.log(this.registerUserData);
    this._userService.RegisterUser(this.registerUserData).subscribe((res) => {
      console.log(res);
      if (res.status == 200) {
        this.showLogin = true;
      }
    },
      (err) => {
        console.log(err);
      }
    );
  }
}
