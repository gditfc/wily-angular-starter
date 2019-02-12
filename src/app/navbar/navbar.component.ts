import {Component} from '@angular/core';
import {Auth} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  showMenu = false;

  constructor(
    private auth: Auth,
    private router: Router,
    private userService: UserService
  ) {
    if (!userService.getUser()) {
      userService.loadUser();
    }
  }

  doLogout(): void {
    this.router.navigate(['/']).then(result => this.auth.logout());
  }

  openMenu(): void {
    this.showMenu = true;
  }

  closeMenu(): void {
    this.showMenu = false;
  }

}
