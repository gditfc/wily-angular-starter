import {Component, Input} from '@angular/core';
import {ParentComponent} from './parent.component';
import {UserService} from '../services/user.service';
import {ContainerAnimation} from '../animations/container.animation';

@Component({
  selector: 'app-page-header',
  animations: [ContainerAnimation],
  template: `
    <div class="header_color">
      <div class="header">
        <div class="bar">
          <div class="accent">
            <div class="bar_1"></div>
            <div class="bar_2"></div>
            <div class="bar_3"></div>
          </div>
          <div class="title">
            <div class="font_color_1 inline">
              <div><i class="fas fa-lg" [ngClass]="iconClass"></i></div>
              <div style="padding-left:5px;">{{title}}</div>
            </div>
          </div>
        </div>
        <div class="action font_color_1">
          <wily-help-widget
            [productKey]="environment.helpProductKey"
            [helpSystemUrl]="environment.helpSystemUrl"
            [canEdit]="isHelpTextUser()"
            [serviceUrl]="environment.helpServiceUrl"
            [elementKey]="getHelpKey()"
            [fontSize]="helpTextConfig.fontSize">
          </wily-help-widget>
        </div>
      </div>
      <div class="header_subtitle">
        <div class="font_color_2">{{subtitle}}</div>
      </div>
    </div>`
})
export class PageHeaderComponent extends ParentComponent {

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  helpKey: string;

  @Input()
  iconClass = 'fa-square-o';

  constructor(protected userService: UserService) {
    super(userService);
  }

  getHelpKey(): string {
    return this.helpKey;
  }
}
