import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Auth} from './auth.service';
import {CognitoAuthInterceptor} from 'wily-angular-commons';

@Injectable()
export class AuthInterceptor extends CognitoAuthInterceptor {

  constructor(protected auth: Auth) {
    super(auth);
  }

  getWhitelistUrls(): Array<string> {
    return environment.whitelistUrls;
  }

}
