import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../environments/environment';
import {ThemingService, DialogComponent} from 'wily-angular-commons';
import {UserIdleService} from 'angular-user-idle';
import {Auth} from './shared/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  count = 0;
  showDialog: any;

  @ViewChild('timeoutDialog')
  timeoutDialog: DialogComponent;

  constructor(
    private auth: Auth,
    private themingService: ThemingService,
    private userIdle: UserIdleService
  ) {
  }

  ngOnInit() {
    this.themingService.appInit(environment.helpProductKey, environment.helpServiceUrl);
    this.initTimeout();
  }

  private initTimeout(): void {
    // Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => {
      this.count = environment.idleConfig.timeout - count;

      if (!this.showDialog) {
        this.showDialog = {};
        this.timeoutDialog.open();
      }
    });

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => this.auth.logout());
  }

  public resetTimer(doClose?: boolean): void {
    this.userIdle.resetTimer();
    this.showDialog = null;

    if (doClose) {
      this.timeoutDialog.close();
    }
  }

}
