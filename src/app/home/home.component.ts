import {Component, OnInit} from '@angular/core';
import {ParentComponent} from '../shared/components/parent.component';
import {UserService} from '../shared/services/user.service';
import {ContainerAnimation} from '../shared/animations/container.animation';
import {Title} from '@angular/platform-browser';
import {Auth} from '../shared/services/auth.service';
import {HomeDataService} from './services/home.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ContainerAnimation]
})
export class HomeComponent extends ParentComponent implements OnInit {

  constructor(
    protected userService: UserService,
    protected titleService: Title,
    private homeDataService: HomeDataService,
    private auth: Auth
  ) {
    super(userService);
    titleService.setTitle(`Dashboard - ${this.environment.title}`);
  }

  ngOnInit() {
    /**
    this.homeDataService.getThings().subscribe(
      result => {
        console.log(result);
      }
    );
     */
  }

  getUser() {
    return this.userService.getUser();
  }

  getHelpKey() {
    return 'wily-dashboard';
  }
}
