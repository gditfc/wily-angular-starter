import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavbarState} from '../models/navbar-state';
import {Auth} from '../../shared/services/auth.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input()
  navbarState: NavbarState;

  environment = environment;

  constructor(
    private router: Router,
    private auth: Auth
  ) {
  }

  ngOnInit() {
  }

  navigate(route: any[]): void {
    this.router.navigate(route).then(
      () => {
        this.navbarState.showMenu = false;
      }
    );
  }

  accordion(id: string): void {
    const idDisplay = document.getElementById(id).style.maxHeight;
    const height = document.getElementById(id).scrollHeight + 'px';

    if (idDisplay === height) {
      document.getElementById(id).style.maxHeight = '0px';
    } else if (idDisplay === '0px' || !idDisplay) {
      document.getElementById(id).style.maxHeight = height;
    }

  }

  doLogout() {
    this.router.navigate(['/']).then(result => this.auth.logout());
  }

}
