import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { Subject, filter, map } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  AdminData: any;
  currentUrl!: string;

  sidebarContents = ['Dashboard', 'Products', 'Orders', 'Profile'];

  private lastSegmentSubject = new Subject<any>();
  lastSegment$ = this.lastSegmentSubject.asObservable();

  constructor(private _adminService: AdminService, private _router: Router) { }

  ngOnInit(): void {
    this._adminService.GetAdminData().subscribe((res) => {
      this.AdminData = res;
    });
    this.CurrentUrl();

    this._router.events.pipe(
      filter((event: NavigationEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      const segments = url.split('/');
      this.currentUrl = segments[segments.length - 1];
    });
  }

  CurrentUrl() {
    const segments = this._router.url.split('/');
    this.currentUrl = segments[segments.length - 1];
  }

  async Navigate(url: string) {
    await this._router.navigate([`admin/${url.toLowerCase()}`]);
    this.CurrentUrl();
  }

}
