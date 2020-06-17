import {environment} from '../../../environments/environment';
import {UserService} from '../services/user.service';
import { HostBinding, OnDestroy, OnInit, Directive } from '@angular/core';

@Directive()
export abstract class ParentComponent implements OnInit, OnDestroy {

  @HostBinding('@containerAnimation')
  containerAnimation = '';

  environment = environment;

  helpTextConfig = {
    fontSize: '24px'
  };

  protected constructor(
    protected userService: UserService
  ) {
  }

  abstract getHelpKey(): string;

  getBackgroundClass(): string {
    return null;
  }

  isHelpTextUser(): boolean {
    return this.userService.isHelpTextUser();
  }

  ngOnInit(): void {}

  protected addBackgroundClass(): void {
    this.userService.addBackgroundClass(this.getBackgroundClass());
  }

  ngOnDestroy(): void {
    this.removeBackgroundClass();
  }

  protected removeBackgroundClass(): void {
    this.userService.removeBackgroundClass(this.getBackgroundClass());
  }

}
