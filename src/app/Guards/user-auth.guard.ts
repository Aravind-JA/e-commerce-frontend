import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

export const userAuthGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isLoggedIn()) {
    return true
  } else {
    router.navigate(['login']);
    return false
  }
};
