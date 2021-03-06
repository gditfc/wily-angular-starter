import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../shared/security/auth.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Output()
  close: EventEmitter<any> = new EventEmitter();

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
        this.closeMenu();
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

  closeMenu(): void {
    this.close.emit();
  }

}
