import {Component} from '@angular/core';
import {Auth} from '../../shared/security/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {environment} from 'environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  showMenu = false;
  user: any;
  environment = environment;

  constructor(
    private auth: Auth,
    private router: Router,
    private userService: UserService
  ) {
    this.user = userService.getUser();
    if (!this.user) {
      this.user = userService.loadUser();
    }
  }

  openMenu(): void {
    this.showMenu = true;
  }

  closeMenu(): void {
    this.showMenu = false;
  }

}
