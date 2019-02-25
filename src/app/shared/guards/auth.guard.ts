import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Auth} from '../security/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  canActivate() {
    // If user is not logged in we'll send them to the homepage
    if (!this.auth.authenticated()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
