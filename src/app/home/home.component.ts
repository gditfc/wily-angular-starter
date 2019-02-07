import {Component, OnInit} from '@angular/core';
import {ParentComponent} from '../shared/components/parent.component';
import {UserService} from '../shared/services/user.service';
import {ContainerAnimation} from '../shared/animations/container.animation';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ContainerAnimation]
})
export class HomeComponent extends ParentComponent implements OnInit {

  constructor(
    protected userService: UserService,
    protected titleService: Title,
    // private homeDataService: HomeDataService
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

  getHelpKey() {
    return 'wily-dashboard';
  }
}
