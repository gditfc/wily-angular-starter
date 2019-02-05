import {environment} from '../../../environments/environment';
import {UserService} from '../services/user.service';
import {HostBinding} from '@angular/core';

export abstract class ParentComponent {

  @HostBinding('@containerAnimation')
  containerAnimation = '';

  environment = environment;

  helpTextConfig = {
    fontSize: '24px'
  };

  protected constructor(
    protected userService: UserService
  ) {}

  abstract getHelpKey(): string;

  isHelpTextUser(): boolean {
    return this.userService.isHelpTextUser();
  }

}
