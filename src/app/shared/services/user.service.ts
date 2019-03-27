import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BaseDataService, Theme, ThemingService} from 'wily-angular-commons';
import {environment} from '../../../environments/environment';
import {UserModel} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../security/auth.service';

@Injectable()
export class UserService extends BaseDataService {

  private HELP_TEXT_EDITOR = 'help_text_editor';
  private user: UserModel;

  private renderer: Renderer2;

  constructor(
    protected http: HttpClient,
    private auth: Auth,
    private themingService: ThemingService,
    private rendererFactory: RendererFactory2
  ) {
    super(http);
    this.renderer = rendererFactory.createRenderer(null, null);
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

  getTheme(): Theme {
    return this.themingService.getTheme();
  }

  addBackgroundClass(backgroundClass?: string): void {
    if (backgroundClass) {
      this.renderer.addClass(document.body, backgroundClass);
    }
  }

  removeBackgroundClass(backgroundClass?: string): void {
    if (backgroundClass) {
      this.renderer.removeClass(document.body, backgroundClass);
    }
  }

}
