import {Injectable, Injector} from '@angular/core';
import {CognitoAuth, CognitoAuthSession} from 'amazon-cognito-auth-js';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {CognitoAuthService} from 'wily-angular-commons';

@Injectable({
  providedIn: 'root'
})
export class Auth extends CognitoAuthService {

  public constructor(
    private injector: Injector
  ) {
    super();
  }

  getAuthData(): any {
    return environment.authData;
  }

  getRouter(): Router {
    return this.injector.get(Router);
  }

}
