import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelpWidgetModule} from 'wily-angular-commons';
import {PageHeaderComponent} from '../components/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    HelpWidgetModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule {
}
