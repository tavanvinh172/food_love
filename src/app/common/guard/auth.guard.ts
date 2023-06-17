import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const userToken = authService.isLoggin();
    if (userToken) {
      return true;
    } else {
      // get the router instance
      const router = inject(Router);
      // navigate to the login page
      router.navigate(['login'])
      return false;
    }
};
