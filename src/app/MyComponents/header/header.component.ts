import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  search!: String;
  showLogin: boolean = false;

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['home']);
  }
  /**
   * AUTHOR: 
   * Desc:
   * Out
   */
  Search() {
    if (!this.search) {

    } else {
      this.router.navigate(['search'], { queryParams: { q: this.search } });
    }
  }

  ngOnInit(): void {

  }

  ShowLogin() {
    this.showLogin = true;
  }
}
