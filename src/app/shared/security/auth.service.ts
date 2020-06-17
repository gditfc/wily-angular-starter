import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  public constructor(private injector: Injector) { }

  getAuthData(): any {
    return environment.authData;
  }

  getRouter(): Router {
    return this.injector.get(Router);
  }

}
