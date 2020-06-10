import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Auth} from './auth.service';

@Injectable()
export class AuthInterceptor {

  constructor(protected auth: Auth) { }

  getWhitelistUrls(): Array<string> {
    return environment.whitelistUrls;
  }

}
