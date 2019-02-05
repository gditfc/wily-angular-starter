import {Component, OnInit} from '@angular/core';
import {Auth} from './shared/services/auth.service';
import {environment} from '../environments/environment';
import {ThemingService} from 'wily-angular-commons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private auth: Auth,
    private themingService: ThemingService
  ) {}

  ngOnInit() {
    this.themingService.appInit(environment.helpProductKey, environment.helpServiceUrl);
  }

}
