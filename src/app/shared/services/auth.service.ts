import {Injectable} from '@angular/core';
import {CognitoAuth, CognitoAuthSession} from 'amazon-cognito-auth-js';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {CognitoAuthService} from 'wily-angular-commons';

@Injectable()
export class Auth extends CognitoAuthService {

  constructor(protected router: Router) {
    super(router,  environment.authData);
  }

}
