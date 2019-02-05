import {Component, OnInit} from '@angular/core';
import {Auth} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {NavbarState} from './models/navbar-state';
import {UserService} from '../shared/services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  navbarState: NavbarState = new NavbarState();

  constructor(
    private auth: Auth,
    private router: Router,
    private userService: UserService
  ) {
    if (!userService.getUser()) {
      userService.loadUser();
    }
  }

  ngOnInit() {
  }

  doLogout() {
    this.router.navigate(['/']).then(result => this.auth.logout());
  }

  openMenu() {
    this.navbarState.showMenu = true;
  }

}
