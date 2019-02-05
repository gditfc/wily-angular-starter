import {Injectable} from '@angular/core';
import {BaseDataService} from 'wily-angular-commons';
import {environment} from '../../../environments/environment';
import {UserModel} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Auth} from './auth.service';

@Injectable()
export class UserService extends BaseDataService {

  private HELP_TEXT_EDITOR = 'help_text_editor';
  private user: UserModel;

  constructor(
    protected http: HttpClient,
    private auth: Auth
  ) {
    super(http);
  }

  getBaseUrl(): string {
    return environment.baseUrl;
  }

  getUser() {
    const user = this.auth.getUser();

    if (user) {
      return user;
    }

    return {
      name: 'Unknown User',
      email: 'unknown@unknown.com'
    };
  }

  loadUser() {
    this.handleGet('/user').subscribe(
      result => {
        this.user = result;
      }
    );
  }

  isHelpTextUser(): boolean {
    if (this.user && this.user.authorization && this.user.authorization.roles) {
      return this.user.authorization.roles.indexOf(this.HELP_TEXT_EDITOR) > -1;
    }

    return false;
  }

}
