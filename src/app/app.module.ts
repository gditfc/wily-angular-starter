import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {UserService} from './shared/services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/primeng';
import {MenuComponent} from './layout/menu/menu.component';
import {GrowlModule} from 'primeng/growl';
import {TabViewModule} from 'primeng/tabview';
import {HomeDataService} from './home/services/home.data.service';
import {UserIdleModule} from 'angular-user-idle';
import {environment} from '../environments/environment';
import {CognitoModule} from './shared/security/cognito.module';

import {
  JsonInterceptor,
  LocalStorageService,
  WilyPushContainerModule,
  WilyDialogModule
} from 'wily-angular-commons';

import {
  TranscendHelpModule,
  TranscendThemesModule,
  ThemingService,
} from 'transcend-angular-commons';

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
    TranscendHelpModule,
    AmChartsModule,
    SidebarModule,
    GrowlModule,
    TabViewModule,
    TranscendThemesModule,
    WilyPushContainerModule,
    WilyDialogModule,
    CognitoModule,
    UserIdleModule.forRoot(environment.idleConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true
    },
    UserService,
    LocalStorageService,
    ThemingService,
    HomeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
