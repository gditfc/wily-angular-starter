import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {UserService} from './shared/services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng';
import {MenuComponent} from './layout/menu/menu.component';
import {TabViewModule} from 'primeng/tabview';
import {HomeDataService} from './home/services/home.data.service';
import {UserIdleModule} from 'angular-user-idle';
import {environment} from '../environments/environment';

import {
  JsonInterceptor,
  LocalStorageService,
  WilyPushContainerModule,
  WilyDialogModule
} from 'wily-angular-commons';

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
    SidebarModule,
    TabViewModule,
    WilyPushContainerModule,
    WilyDialogModule,
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
    HomeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
