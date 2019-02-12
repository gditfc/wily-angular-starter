import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {
  HelpWidgetModule,
  JsonInterceptor,
  LocalStorageService,
  PushContainerModule,
  ThemingModule,
  ThemingService,
  WilyDialogModule
} from 'wily-angular-commons';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {Auth} from './shared/services/auth.service';
import {AuthGuard} from './shared/guards/auth.guard';

import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {UserService} from './shared/services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/primeng';
import {MenuComponent} from './layout/menu/menu.component';
import {GrowlModule} from 'primeng/growl';
import {TabViewModule} from 'primeng/tabview';
import {PageHeaderModule} from './shared/modules/page-header.module';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import {HomeDataService} from './home/services/home.data.service';
import {UserIdleModule} from 'angular-user-idle';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HelpWidgetModule,
    AmChartsModule,
    SidebarModule,
    GrowlModule,
    TabViewModule,
    ThemingModule,
    PageHeaderModule,
    PushContainerModule,
    WilyDialogModule,
    UserIdleModule.forRoot(environment.idleConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    Auth,
    AuthGuard,
    UserService,
    LocalStorageService,
    ThemingService,
    HomeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
