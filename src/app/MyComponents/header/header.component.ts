import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  search!: String;
  isAdmin: boolean = false;
  isLoggedIn!: boolean;
  showLogin: boolean = false;

  constructor(private router: Router, private _userService: UserService, private route: ActivatedRoute) { }

  goHome() {
    this.router.navigate(['home']);
  }

  Search() {
    if (!this.search) {

    } else {
      this.router.navigate(['search'], { queryParams: { q: this.search } });
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl: string = this.router.url;
        this.isAdmin = currentUrl.includes('/admin');
      }
    });

    this.Intialize();
  }

  Intialize() {
    this.isLoggedIn = this._userService.isLoggedIn();
  }

  ShowLogin() {
    this.showLogin = true;
  }

  Logout() {
    this._userService.LogoutUser();
    this.router.navigate(['home']);
    this.isLoggedIn = false;
  }

  AdminLogin() {
    this.router.navigate(['admin/dashboard']);
  }
}
