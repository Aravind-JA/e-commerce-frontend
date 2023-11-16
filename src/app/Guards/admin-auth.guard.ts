import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {

  const adminService = inject(AdminService);
  const router = inject(Router);

  if (adminService.isAdminLoggedIn()) {
    return true;
  } else {
    router.navigate(['admin/login']);
    return false;
  }
};
