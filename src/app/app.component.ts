import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../environments/environment';
import {DialogComponent} from 'wily-angular-commons';
import {UserIdleService} from 'angular-user-idle';
import {Auth} from './shared/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  /**
   * The number of seconds until the user's session expires.
   */
  count = 0;

  /**
   * Controls display of the timeout dialog. Dialog is displayed when truthy.
   */
  showDialog: any;

  /**
   * The timeout dialog displayed when the user's session is nearing expiration.
   */
  @ViewChild('timeoutDialog')
  timeoutDialog: DialogComponent;

  constructor(
    private auth: Auth,
    private userIdle: UserIdleService
  ) {
  }

  ngOnInit() {
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

  /**
   * Reset user idle timer.
   * @param {boolean} doClose  Closes the timeout dialog when true.
   */
  public resetTimer(doClose?: boolean): void {
    this.userIdle.resetTimer();
    this.showDialog = null;

    if (doClose) {
      this.timeoutDialog.close();
    }
  }

}
